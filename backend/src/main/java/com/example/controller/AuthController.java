package com.example.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.config.JwtProvider;
import com.example.modal.User;
import com.example.repositories.UserRepository;
import com.example.request.LoginRequest;
import com.example.response.AuthResponse;
import com.example.services.CustomUserDetailsImpl;
import com.example.services.SubscriptionService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomUserDetailsImpl customUserDetails;
    private final SubscriptionService subscriptionService;
    private final JwtProvider jwtProvider;

    public AuthController(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            CustomUserDetailsImpl customUserDetails,
            SubscriptionService subscriptionService,
            JwtProvider jwtProvider) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.customUserDetails = customUserDetails;
        this.subscriptionService = subscriptionService;
        this.jwtProvider = jwtProvider;
    }

    // ✅ SIGNUP
    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> signup(@RequestBody User user) {

        if (userRepository.findByEmail(user.getEmail()) != null) {
            throw new BadCredentialsException("Email already exists");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User savedUser = userRepository.save(user);

        subscriptionService.createSubscription(savedUser);

        Authentication authentication =
                new UsernamePasswordAuthenticationToken(savedUser.getEmail(), null);

        String jwt = jwtProvider.generateToken(authentication);

        AuthResponse res = new AuthResponse(jwt, "Signup successful");
        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }

    // ✅ SIGNIN
    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> signin(@RequestBody LoginRequest loginRequest) {

        Authentication authentication =
                authenticate(loginRequest.getEmail(), loginRequest.getPassword());

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtProvider.generateToken(authentication);

        AuthResponse res = new AuthResponse(jwt, "Signin successful");
        return ResponseEntity.ok(res);
    }

    private Authentication authenticate(String username, String password) {

        UserDetails userDetails = customUserDetails.loadUserByUsername(username);

        if (userDetails == null) {
            throw new BadCredentialsException("Invalid username");
        }

        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("Invalid password");
        }

        return new UsernamePasswordAuthenticationToken(
                userDetails.getUsername(),
                null,
                userDetails.getAuthorities());
    }
}
