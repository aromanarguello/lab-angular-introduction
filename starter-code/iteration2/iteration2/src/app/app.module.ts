import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { CommentsComponentComponent } from './comments-component/comments-component.component';


@NgModule({
  declarations: [
    AppComponent,
    MaincomponentComponent,
    CommentsComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
