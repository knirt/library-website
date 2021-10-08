import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import type { RootState, Dispatch } from "./store";

// These are just the types selector and dispatch hooks, i exported types hooks from their own file
// so i dont have to worry about typing them all the time
export const useAppDispatch = () => useDispatch<Dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
