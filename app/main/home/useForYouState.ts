import { createState } from "../../utils/createState";

type ForYouState = {};

const initialState: ForYouState = {};

export const { _state: _useForYouState, state: useForYouState } =
  createState(initialState);
