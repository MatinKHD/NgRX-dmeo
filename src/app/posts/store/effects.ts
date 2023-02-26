import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as PostActions from './actions'
import {catchError, map, mergeMap, of} from "rxjs";
import {PostService} from "../services/post.service";

@Injectable()
export class PostEffects {
  getPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.getPosts),
      mergeMap(() => {
        return this.postService.getPosts().pipe(
          map((posts) => PostActions.getPostsSuccess({posts})),
          catchError(err => of(PostActions.getPostsFailure({error: err.message})))
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private postService: PostService
  ) {
  }
}
