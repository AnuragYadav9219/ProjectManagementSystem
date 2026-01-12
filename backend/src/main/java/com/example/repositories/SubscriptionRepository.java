package com.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.modal.Subscription;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {

    Subscription findByUserId(Long userId);
}
