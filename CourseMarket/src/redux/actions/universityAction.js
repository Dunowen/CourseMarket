import * as type from "./actionTypes";
import UniversityApi from "../api/universityApi.js";


export function getUniversitiesAsync() {
  return dispatch => {
    let universityApi = new UniversityApi();

    return universityApi.getActionType().then(response => {
        //talán itt kellene json objectté alakítani?
        dispatch(getActionType(response));
    }).catch(error => {
        console.log("Error in getUniversitiesAction.")
    });
  };
}

export function getActionType(actionType) {
  return {
    type: type.GET_UNIVERSITIES,
    data: actionType
  };
}
