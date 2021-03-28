import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={() => {
        props.alterList(props.id, props.action);
      }}
    >
      {props.action}
    </button>
  );
};

export default Button;
