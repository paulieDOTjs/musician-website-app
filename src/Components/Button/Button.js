import React, { useContext } from "react";
import "./Button.css";
import { StyleContext } from "../../State/Context.js";
import * as Actions from "../../State/Actions";

function Button() {
  const { state, dispatch } = useContext(StyleContext);

  function toggleDarkMode() {
    dispatch({
      type: Actions.TOGGLE_DARK_MODE
    });
  }

  return (
    <>
      <button className="Button" onClick={toggleDarkMode}>
        Click
      </button>
      <link
        rel="stylesheet"
        href={`${process.env.PUBLIC_URL}/media/styles/color/${
          state.DarkMode ? "DarkMode.css" : "LightMode.css"
        }`}
      />
    </>
  );
}

export default Button;
