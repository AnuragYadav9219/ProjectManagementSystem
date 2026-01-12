package com.example.DTO;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.example.modal.Project;
import com.example.modal.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class IssueDTO {

    private Long id;
    private String title;
    private String description;
    private String status;
    private Long projectID;
    private String priority;
    private LocalDate dueDate;
    private Project project;
    private List<String> tags = new ArrayList<>();

    private User assignee;
}
