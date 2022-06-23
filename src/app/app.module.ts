import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { PostsTitlsComponent } from './posts-titls/posts-titls.component';
import { PostsService } from './posts.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, Test1Component, PostsTitlsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PostsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
