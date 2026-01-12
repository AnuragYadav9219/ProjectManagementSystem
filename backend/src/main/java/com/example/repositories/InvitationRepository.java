package com.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.modal.Invitation;

public interface InvitationRepository extends JpaRepository<Invitation, Long> {

    Invitation findByToken(String token);

    Invitation findByEmail(String userEmail);
}
