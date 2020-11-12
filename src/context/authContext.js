import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL_CHANGED":
      return { ...state, email: action.payload };

    case "PASSWORD_CHANGED":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

//actions
const emailChange = (dispatch) => ({ email }) => {
  dispatch({ type: "EMAIL_CHANGED", payload: email });
};

const passwordChange = (dispatch) => ({ password }) => {
  dispatch({ type: "PASSWORD_CHANGED", payload: password });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    emailChange,
    passwordChange,
  },
  { email: "", password: "" }
);
