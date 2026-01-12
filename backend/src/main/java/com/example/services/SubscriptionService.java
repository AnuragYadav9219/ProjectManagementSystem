package com.example.services;

import com.example.modal.PlanType;
import com.example.modal.Subscription;
import com.example.modal.User;

public interface SubscriptionService {
    
    Subscription createSubscription(User user);

    Subscription getUsersSubscription(Long userId) throws Exception;

    Subscription upgradeSubscription(Long userId, PlanType planType);

    boolean isValid(Subscription subscription);
}
