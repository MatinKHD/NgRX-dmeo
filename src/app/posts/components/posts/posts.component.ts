import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as PostsActions from '../../store/actions';

import {PostInterface} from '../../types/post-interface';
import {errorSelector, isLoadingSelector, postsSelector} from "../../store/selectors";
import {AppStateInterface} from "../../../types/app-state.interface";

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  posts$!: Observable<PostInterface[]>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.posts$ = this.store.pipe(select(postsSelector));
    this.error$ = this.store.pipe(select(errorSelector))
  }

  ngOnInit(): void {
    this.store.dispatch(PostsActions.getPosts());
  }
}
