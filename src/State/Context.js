import React, { createContext, useReducer } from "react";

import Reducer from "./Reducer";
import * as Actions from "./Actions";

export const StyleContext = createContext();

const initialState = {
  color: "DarkMode"
};

export default function StyleProvider(props) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const value = { state, dispatch, Actions };

  return (
    <>
      <StyleContext.Provider value={value}>
        {props.children}
      </StyleContext.Provider>
    </>
  );
}
