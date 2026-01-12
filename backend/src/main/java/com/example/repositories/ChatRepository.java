package com.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.modal.Chat;

public interface ChatRepository extends JpaRepository<Chat, Long> {

}
