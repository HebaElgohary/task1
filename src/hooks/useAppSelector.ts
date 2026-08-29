import { useSelector } from "react-redux";
import type { RootState } from "../store/auth.store";


export const useAppSelector=useSelector.withTypes<RootState>()
