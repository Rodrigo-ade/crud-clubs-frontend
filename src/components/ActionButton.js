import React from "react";

function ActionButton(props) {
  const button = (
    <button type={props.type} onClick={props.onClick} className="club-button-action">{props.text}</button>
  )

  return button;
}

export default ActionButton;
