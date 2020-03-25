import * as Actions from "./Actions";

export default function reducer(state, action) {
  switch (action.type) {
    //Used for testing
    case Actions.TEST: {
      console.log("Incoming test");
      return { ...state };
    }
    case Actions.TOGGLE_DARK_MODE: {
      return { ...state, DarkMode: !state.DarkMode };
    }
    default: {
      throw new Error("UNKOWN ACTION:", action.type);
    }
  }
}
