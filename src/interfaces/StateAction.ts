import {Dispatch, SetStateAction} from "react";

export interface StateAction<T> {
  [ value: string ]: Dispatch<SetStateAction<T>>
}