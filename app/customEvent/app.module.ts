import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CustomEventDirective } from './customEvent.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CustomEventDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
