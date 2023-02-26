import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./posts/components/posts/posts.component";
import {AdminComponent} from "./auth/components/admin/admin.component";

const routes: Routes = [
  {
    component: PostsComponent,
    path: 'posts'
  },
  {
    component: AdminComponent,
    path: 'admin'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
