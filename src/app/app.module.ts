import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { SingleUserComponent } from './single-user/single-user.component';
import {HttpClientModule} from "@angular/common/http";
import { PostsComponent } from './posts/posts.component';
import { SinglePostsComponent } from './single-posts/single-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SingleUserComponent,
    PostsComponent,
    SinglePostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
