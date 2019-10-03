import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostdetailsComponent } from './components/postdetails/postdetails.component';
import { PostsComponent } from './components/posts/posts.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: 'post-details/:id', component: PostdetailsComponent},
  { path: 'posts', component: PostsComponent},
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
