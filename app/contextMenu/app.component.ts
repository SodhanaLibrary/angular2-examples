import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <div (mouseup)="detectRightMouseClick($event)" style="border:1px solid #ccc;padding:15px;width:100%">
    Right Mouse click here
    </div>
    <div class="rightClickPanel" [ngStyle]="rightPanelStyle" (clickOutside)="closeContextMenu()">
    My right panel
    </div>
  `
})
export class AppComponent {
  rightPanelStyle: Object = {};
  
  detectRightMouseClick($event) {
       if($event.which === 3) {
            this.rightPanelStyle = {'display':'block','left':$event.clientX + 'px','top':$event.clientY + 'px'};
            return false;
       }
  }

  closeContextMenu() {
      this.rightPanelStyle = {'display':'none'};
  }
}
