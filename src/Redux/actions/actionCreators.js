import * as ActionTypes from 'Redux/actions/actionTypes';

//saga
export const aboutPageErrorTrigger = cause => ({
    type: ActionTypes.AboutPageErrorTrigger,
    cause: cause,
});

//loading
export const saveLoading = (loadingType, status) => ({
    type: ActionTypes.SaveLoading,
    payload: {
        type: loadingType,
        status,
    },
});

//skill
export const fetchSkills = () => ({
    type: ActionTypes.FetchSkills
});

export const saveSkills = skills => ({
    type: ActionTypes.SaveSkills,
    payload: skills,
});

//friend
export const fetchFriends = () => ({
    type: ActionTypes.FetchFriends,
});

export const saveFriends = friends => ({
    type: ActionTypes.SaveFriends,
    payload: friends,
});

//Project
export const fetchFeatureProjects = () => ({
    type: ActionTypes.FetchFeatureProjects,
});

export const saveFeatureProjects = featureProjects => ({
    type: ActionTypes.SaveFeatureProjects,
    payload: featureProjects
});

export const fetchProjects = () => ({
    type: ActionTypes.FetchProjects,
});

export const saveProjects = projects => ({
    type: ActionTypes.SaveProjects,
    payload: projects,
});

//Blog
export const fetchBlogs = () => ({
    type: ActionTypes.FetchBlogs,
});

export const saveBlogs = blogs => ({
    type: ActionTypes.SaveBlogs,
    payload: blogs,
});

//error
export const saveError = (errorType, errorCode) => ({
    type: ActionTypes.SaveError,
    payload: {
        type: errorType,
        code: errorCode,
    }
});