import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { PostsTitlsComponent } from './posts-titls/posts-titls.component';
import { Test1Component } from './test1/test1.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts-titles', pathMatch: 'full' },
  { path: 'posts-titles', component: PostsTitlsComponent },
  { path: 'posts-details/:id', component: PostsDetailsComponent },
  { path: '**', component: Test1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// Don't Repeat The Code Which At app.module.ts ..don't re-import these components
export const components = [PostsDetailsComponent, PostsTitlsComponent];
