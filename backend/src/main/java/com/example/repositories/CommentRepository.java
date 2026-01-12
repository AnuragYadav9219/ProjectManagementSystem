package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.modal.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    
    List<Comment> findByIssueId(Long issueId);
}
