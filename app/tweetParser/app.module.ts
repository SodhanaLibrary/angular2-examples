import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TweetParser } from './parser.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TweetParser ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
