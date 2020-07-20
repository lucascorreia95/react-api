import { useContext } from "react";
import Context from "./Context";

export const useCounter = () => useContext(Context);

export default useCounter;
