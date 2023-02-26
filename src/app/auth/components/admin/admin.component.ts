import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import * as UserActions from '../../store/actions';

import {UserInterface} from "../../types/user.interface";
import {errorSelector, isLoadingSelector, usersSelector} from "../../store/selector";
import {AppStateInterface} from "../../../types/app-state.interface";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  users$!: Observable<UserInterface[]>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.users$ = this.store.pipe(select(usersSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(UserActions.getUsers());
  }

}
