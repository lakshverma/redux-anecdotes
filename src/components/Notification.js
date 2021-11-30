import React from "react";
import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector((state) => state.notifications);
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    display: notification.display,
  };
  return <div style={style}>{notification.message}</div>;
};

export default Notification;
