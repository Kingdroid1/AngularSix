import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import Angular Http service module
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { DetailsComponent } from './details/details.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    DetailsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // add here too
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
