import { createStore } from "redux";
import reducer from "./reducers";

export const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
