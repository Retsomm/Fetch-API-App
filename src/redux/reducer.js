import { CHANGE_NAME } from "./action";
const initialState = {
  newName: "Aria",
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        newName: action.payload.newName,
      };
    default:
      return state;
  }
}
