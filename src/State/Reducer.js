import { TEST } from "./Actions";

export default function reducer(state, action) {
  switch (action.type) {
    //Used for testing
    case TEST: {
      console.log("No action received");
      return { ...state };
    }
    default: {
      throw new Error("UNKOWN ACTION:", action.type);
    }
  }
}
