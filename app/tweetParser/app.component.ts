import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h2>Parse tweets using Angular 2</h2>
    <h4>Enter text in below textarea</h4>
    <textarea cols="50" rows="4" #myTextArea>hi @sodhanalibrary, this is sample tag #AngularJS, this is link http://blog.sodhanalibrary.com/2016/12/react-tweet-parser-parse-tweets-using.html</textarea>
    <br/>
    <button (click)="parseTweet(myTextArea.value)">Parse tweet</button>
    <h4>Parsed tweet</h4>
    <tweetParser [tweet]="myTweet"></tweetParser>
  `
})
export class AppComponent {
   myTweet:string = '';

   parseTweet(val) {
     this.myTweet = val;
   }
}
