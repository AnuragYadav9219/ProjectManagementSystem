package com.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.modal.User;


public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);
}
