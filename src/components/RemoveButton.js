import React from "react";

function RemoveButton(props) {
  const button = (
    <button type="button" onClick={props.onClick} className="club-button-remove">Delete</button>
  )

  return button;
}

export default RemoveButton;
