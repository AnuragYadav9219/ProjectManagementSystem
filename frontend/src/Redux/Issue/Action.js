import api from "@/config/api";
import { ASSIGN_ISSUE_TO_USER_FAILURE, ASSIGN_ISSUE_TO_USER_REQUEST, ASSIGN_ISSUE_TO_USER_SUCCESS, FETCH_ISSUES_BY_ID_FAILURE, FETCH_ISSUES_BY_ID_REQUEST, FETCH_ISSUES_BY_ID_SUCCESS, FETCH_ISSUES_FAILURE, FETCH_ISSUES_REQUEST, FETCH_ISSUES_SUCCESS, UPDATE_ISSUE_STATUS_FAILURE, UPDATE_ISSUE_STATUS_REQUEST, UPDATE_ISSUE_STATUS_SUCCESS } from "./ActionType"

export const fetchIssues = (id) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_ISSUES_REQUEST });
        try {
            const response = await api.get(`/api/issues/project/${id}`);
            console.log("Fetch Issues", response.data);
            dispatch({
                type: FETCH_ISSUES_SUCCESS,
                issues: response.data
            });
        } catch (error) {
            dispatch({
                type: FETCH_ISSUES_FAILURE,
                error: error.message
            });
        }
    };
}

export const fetchIssueById = (id) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_ISSUES_BY_ID_REQUEST });
        try {
            const response = await api.get(`/api/issues/${id}`);
            console.log("Fetch Issue by id", response.data);
            dispatch({
                type: FETCH_ISSUES_BY_ID_SUCCESS,
                issues: response.data
            });
        } catch (error) {
            dispatch({
                type: FETCH_ISSUES_BY_ID_FAILURE,
                error: error.message
            });
        }
    };
}

export const updateIssueStatus = ({id, status}) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_ISSUE_STATUS_REQUEST });
        try {
            const response = await api.put(`/api/issues/${id}/status/${status}`);
            console.log("Update Issue Status", response.data);
            dispatch({
                type: UPDATE_ISSUE_STATUS_SUCCESS,
                issues: response.data
            });
        } catch (error) {
            dispatch({
                type: UPDATE_ISSUE_STATUS_FAILURE,
                error: error.message
            });
        }
    };
}

export const assignedUserToIssue = ({issueId, userId}) => {
    return async (dispatch) => {
        dispatch({ type: ASSIGN_ISSUE_TO_USER_REQUEST });
        try {
            const response = await api.put(`/api/issues/${issueId}/assignee/${userId}`);
            console.log("Assigned Issue ----", response.data);
            dispatch({
                type: ASSIGN_ISSUE_TO_USER_SUCCESS,
                issues: response.data
            });
        } catch (error) {
            console.log("Error ", error)
            dispatch({
                type: ASSIGN_ISSUE_TO_USER_FAILURE,
                error: error.message
            });
        }
    };
}