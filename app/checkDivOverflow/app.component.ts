import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h4>Click on below DIV to check whether they are overflow elements or not</h4>
   <div class="overflow_div" (click)="checkOverflow($event)"> div 1</div>
   <div class="overflow_div" (click)="checkOverflow($event)"> div 2 <br/><br/><br/><br/><br/><br/></div>
   <div class="overflow_div" (click)="checkOverflow($event)"> div 3 <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
  `
})
export class AppComponent {
  checkOverflow($event) {
    if ($event.target.offsetHeight < $event.target.scrollHeight ||
        $event.target.offsetWidth < $event.target.scrollWidth) {
        // your element have overflow
        alert('div is overflown of elements');
    } else {
        // your element doesn't have overflow
        alert('div is not overflown of elements');
    }
  }
}
