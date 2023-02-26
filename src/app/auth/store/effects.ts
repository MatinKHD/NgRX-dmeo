import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as UserActions from './actions'
import {catchError, map, mergeMap, of} from "rxjs";
import {UserService} from "../services/user.service";

@Injectable()

export class UserEffects {
  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUsers),
      mergeMap(() => {
        return this.userService.getUsers().pipe(
          map((users) => UserActions.getUserSuccess({users})),
          catchError(err => of(UserActions.getUserFailure({error: err.massage})))
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {
  }
}
