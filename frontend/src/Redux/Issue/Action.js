import api from "@/config/api";
import { ASSIGN_ISSUE_TO_USER_FAILURE, ASSIGN_ISSUE_TO_USER_REQUEST, ASSIGN_ISSUE_TO_USER_SUCCESS, CREATE_ISSUE_FAILURE, CREATE_ISSUE_REQUEST, CREATE_ISSUE_SUCCESS, DELETE_ISSUE_FAILURE, DELETE_ISSUE_REQUEST, DELETE_ISSUE_SUCCESS, FETCH_ISSUES_BY_ID_FAILURE, FETCH_ISSUES_BY_ID_REQUEST, FETCH_ISSUES_BY_ID_SUCCESS, FETCH_ISSUES_FAILURE, FETCH_ISSUES_REQUEST, FETCH_ISSUES_SUCCESS, UPDATE_ISSUE_STATUS_FAILURE, UPDATE_ISSUE_STATUS_REQUEST, UPDATE_ISSUE_STATUS_SUCCESS } from "./ActionType"

export const createIssue = (issueData) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_ISSUE_REQUEST });
        try {
            const response = await api.post("/issues", issueData);
            dispatch({
                type: CREATE_ISSUE_SUCCESS,
                issues: response.data
            });
            console.log("Issue created successfully", response.data);

        } catch (error) {
            dispatch({
                type: CREATE_ISSUE_FAILURE,
                error: error.message
            });
        }
    };
}

export const fetchIssues = (id) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_ISSUES_REQUEST });
        try {
            const response = await api.get(`/issues/project/${id}`);
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
            const response = await api.get(`/issues/${id}`);
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

export const updateIssueStatus = ({ id, status }) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_ISSUE_STATUS_REQUEST });
        try {
            const response = await api.put(`/issues/${id}/status/${status}`);
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

export const deleteIssue = (issueId) => async (dispatch) => {
    dispatch({ type: DELETE_ISSUE_REQUEST });

    try {
        await api.delete(`/issues/${issueId}`);

        dispatch({
            type: DELETE_ISSUE_SUCCESS,
            payload: issueId
        });
    } catch (error) {
        dispatch({
            type: DELETE_ISSUE_FAILURE,
            error: error.response?.data?.message || error.message
        });
    }
};

export const assignedUserToIssue = ({ issueId, userId }) => {
    return async (dispatch) => {
        dispatch({ type: ASSIGN_ISSUE_TO_USER_REQUEST });
        try {
            const response = await api.put(`/issues/${issueId}/assignee/${userId}`);
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