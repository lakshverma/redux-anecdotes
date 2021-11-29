import React from "react";
import { handleInputChange } from "../reducers/filterReducer";
import { useDispatch } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const style = {
    marginBottom: 10,
  };

  const handleChange = (event) => {
      const input = event.target.value
      dispatch(handleInputChange(input))
  }
  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default Filter;
