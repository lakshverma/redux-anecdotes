export const setNotification = (message) => {
  return {
    type: "SET_NOTIFICATION",
    data: { message },
  };
};

export const removeNotification = () => {
  return {
    type: "REMOVE_NOTIFICATION",
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
