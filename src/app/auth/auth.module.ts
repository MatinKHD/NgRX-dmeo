import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import {UserService} from "./services/user.service";
import {StoreModule} from "@ngrx/store";
import {reducers, userFeatureKey} from "./store/reducers";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "./store/effects";



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(userFeatureKey, reducers),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [
    UserService
  ]
})
export class AuthModule { }
