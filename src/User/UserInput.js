import React from "react";

const userInput = props => {
  const inputStyle = {
    border: "2px solid red"
  };
  return (
    <div className="UserInput">
      <input type="text" style={inputStyle} onChange={props.changed} />
    </div>
  );
};
export default userInput;
