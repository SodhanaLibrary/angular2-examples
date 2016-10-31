import { Component, Input } from '@angular/core';

@Component({
    selector: 'gifPreview',
    template: `<div class="jqGifPreview">
        <div class="jqGifImageDiv"  (click)="loadNormalImage($event)">
            <img class="jqGifImage" (load)="onImageLoad()" [src]="imgSrc"/>
            <div class="jqGifCircle" [hidden]="gifActiveMode" (click)="loadGifImage($event)">
                <div class="jqGifImageCenter"></div>
                <div class="jqGifImageCircle" [ngClass]="{jqGifRotating:gifLoadingMode}"></div>
                <div class="jqGifImageName"></div>
            </div>
        </div>
        <div class="jqGifImageFooter" [hidden]="gifActiveMode">
            <a class="jqGifImageFooterLeft" target="_blank" [href]="imgSrc">
                {{imgLink.hostname}}
            </a>
            <a class="jqGifImageFooterRight" #imgLink target="_blank" [href]="imgSrc"></a>
        </div>
    </div>`,
    styleUrls:['ng2GifPreview.component.css']
})
export class Ng2GifPreview {
    @Input('preview') preview: string;
    @Input('gif') gif: string;

    imgSrc: string = '';
    gifActiveMode: boolean = false;
    gifLoadingMode: boolean = false;

    constructor() {
    }

    ngOnInit(){
      this.imgSrc = this.preview;
    }

    onImageLoad() {
       if(this.gifLoadingMode) {
         this.gifActiveMode = true;
         this.gifLoadingMode = false;
       } else {
         this.gifActiveMode = false;
       }
    }

    loadGifImage($event) {
        this.imgSrc = this.gif;
        this.gifLoadingMode = true;
        $event.stopPropagation();
    }

    loadNormalImage($event) {
        this.imgSrc = this.preview;
        this.gifActiveMode = false;
        this.gifLoadingMode = false;
        $event.stopPropagation();
    }

}
