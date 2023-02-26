import {createAction, props} from "@ngrx/store";
import {UserInterface} from "../types/user.interface";


export const getUsers = createAction('[Users] Get User');
export const getUserSuccess = createAction(
  '[Users] Get User Success',
  props<{ users: UserInterface[] }>()
);
export const getUserFailure = createAction(
  '[Users] Get User Failure',
  props<{ error: string }>()
);
