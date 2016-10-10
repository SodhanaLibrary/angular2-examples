import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClickOutsideDirective } from './clickOutside.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ClickOutsideDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
