const initialState = { universities: [] };

const UniversityReducer = (state = initialState, action) => {
  switch (action.type) {

    case "GET_UNIVERSITIES":
      return Object.assign({}, state, {
        universities: action.data.data
      });
    default:
      return state;
  }
};

export default UniversityReducer;
