export const setNotification = (message, seconds) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_NOTIFICATION",
      data: { message },
    });
    setTimeout(() => {
      dispatch({
        type: "REMOVE_NOTIFICATION",
      });
    }, seconds * 1000);
  };
};

const initialState = {
  message: null,
  display: "none",
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      const notification = {
        message: action.data.message,
        display: "",
      };
      return notification;
    case "REMOVE_NOTIFICATION":
      return initialState;
    default:
      return state;
  }
};

export default notificationReducer;
