import * as type from "./actionTypes";
import UniversityApi from "../api/universityApi.js";

export function getUniversitiesAsync() {
    return dispatch => {
        let universityApi = new UniversityApi();

        return universityApi.getActionType().then(response => {
            dispatch(getActionType(response));
        }).catch(error => {
            console.log("Error in getUniversitiesAction.", error)
        });
    };
}

export function getActionType(actionType) {
    return {
        type: type.GET_UNIVERSITIES,
        data: actionType
    };
}
