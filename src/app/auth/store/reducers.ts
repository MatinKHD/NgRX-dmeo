import {UserStateInterface} from "../types/userState.interface";
import {createReducer, on} from "@ngrx/store";
import * as UserActions from './actions'

export const userFeatureKey = 'users';

export const initialState: UserStateInterface = {
  isLoading: false,
  users: [],
  error: null,
}

export const reducers = createReducer(
  initialState,
  on(UserActions.getUsers, (state) => ({...state, isLoading: true})),
  on(UserActions.getUserSuccess, (state, action) => (
    {
      ...state,
      isLoading: false,
      users: action.users
    }
  )),
  on(UserActions.getUserFailure, (state, action) => (
    {
      ...state,
      isLoading: false,
      error: action.error
    }
  ))
)
