import { Directive, Output, HostListener, EventEmitter } from '@angular/core';

@Directive({ selector: '[customEvent]' })
export class CustomEventDirective {
  @Output() onUserStopTyping = new EventEmitter();
  _timeout: any = null;
  val: string = '';

  @HostListener('keyup', ['$event']) onChange(event: any) {
    if(this._timeout){ //if there is already a timeout in process cancel it
       clearTimeout(this._timeout);
    }
    this.val = event.target.value;
    this._timeout = setTimeout(()=>{
       this._timeout = null;
       this.onUserStopTyping.emit({
          value: this.val
       });
    },1000);
  }
}
