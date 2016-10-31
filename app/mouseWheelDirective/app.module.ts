import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MouseWheelDirective } from './mousewheel.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MouseWheelDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
