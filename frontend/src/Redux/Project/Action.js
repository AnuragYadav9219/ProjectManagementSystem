import api from "@/config/api"
import { ACCEPT_INVITATION_REQUEST, ACCEPT_INVITATION_SUCCESS, CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS, DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, FETCH_PROJECT_BY_ID_REQUEST, FETCH_PROJECT_BY_ID_SUCCESS, FETCH_PROJECTS_REQUEST, FETCH_PROJECTS_SUCCESS, INVITE_TO_PROJECT_FAILURE, INVITE_TO_PROJECT_REQUEST, INVITE_TO_PROJECT_SUCCESS, SEARCH_PROJECT_REQUEST, SEARCH_PROJECT_SUCCESS } from "./ActionType"

export const fetchProjects = ({ category, tag }) => async (dispatch) => {
    dispatch({ type: FETCH_PROJECTS_REQUEST })
    try {
        const { data } = await api.get("/projects", { params: { category, tag } })
        dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const searchProjects = (keyword) => async (dispatch) => {
    dispatch({ type: SEARCH_PROJECT_REQUEST })
    try {
        const { data } = await api.get("/projects/search", {
            params: { keyword }
        })
        dispatch({ type: SEARCH_PROJECT_SUCCESS, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const createProject = (projectData) => async (dispatch) => {
    dispatch({ type: CREATE_PROJECT_REQUEST })
    try {
        const { data } = await api.post("/projects", projectData)
        dispatch({ type: CREATE_PROJECT_SUCCESS, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const fetchProjectById = (id) => async (dispatch) => {
    dispatch({ type: FETCH_PROJECT_BY_ID_REQUEST })
    try {
        const { data } = await api.get(`/projects/${id}`)
        dispatch({ type: FETCH_PROJECT_BY_ID_SUCCESS, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deleteProject = (projectId) => async (dispatch) => {
    dispatch({ type: DELETE_PROJECT_REQUEST })
    try {
        await api.delete(`/projects/${projectId}`)
        dispatch({ type: DELETE_PROJECT_SUCCESS, payload: projectId })
    } catch (error) {
        console.log(error)
    }
}

export const inviteToProject =
    ({ email, projectId }) =>
        async (dispatch) => {
            dispatch({ type: INVITE_TO_PROJECT_REQUEST });

            try {
                const { data } = await api.post("/projects/invite", {
                    email,
                    projectId,
                });

                dispatch({ type: INVITE_TO_PROJECT_SUCCESS, payload: data });
            } catch (error) {
                console.error("Invite error ", error.response?.data);
                dispatch({
                    type: INVITE_TO_PROJECT_FAILURE,
                    payload: error.response?.data,
                });
            }
        };

export const acceptInvitation = ({ token, navigate }) => async (dispatch) => {
    dispatch({ type: ACCEPT_INVITATION_REQUEST })
    try {
        const { data } = await api.get("/projects/accept_invitation", {
            params: { token }
        })
        navigate(`/project/${data.projectId}`)
        dispatch({ type: ACCEPT_INVITATION_SUCCESS, payload: data })
    } catch (error) {
        console.log(error)
    }
}
