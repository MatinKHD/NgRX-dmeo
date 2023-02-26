import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostService} from "./services/post.service";
import {postsFeatureKeys, reducers} from "./store/reducers";
import {StoreModule} from "@ngrx/store";
import { PostsComponent } from './components/posts/posts.component';
import {EffectsModule} from "@ngrx/effects";
import {PostEffects} from "./store/effects";


@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(postsFeatureKeys, reducers),
    EffectsModule.forFeature([PostEffects])
  ],
  exports: [
    PostsComponent
  ],
  providers: [
    PostService
  ]
})
export class PostsModule {
}
