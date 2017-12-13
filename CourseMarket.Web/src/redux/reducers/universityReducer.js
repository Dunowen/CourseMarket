const initialState = { universitiesList: [] };

const UniversityReducer = (state = initialState, action) => {
  switch (action.type) {

    case "GET_UNIVERSITIES":
      return Object.assign({}, state, {
        universitiesList: action.data.data
      });
    default:
      return state;
  }
};

export default UniversityReducer;
