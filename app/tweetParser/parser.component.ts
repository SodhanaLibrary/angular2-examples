import { Component, Input } from '@angular/core';

@Component({
    selector: 'tweetParser',
    template: `<div [innerHTML]="myHtml"></div>`
})
export class TweetParser {
    @Input('urlClass') urlClass: string = 'react-tweet-parser__url';
    @Input('userClass') userClass: string = 'react-tweet-parser__user';
    @Input('hashtagClass') hashtagClass: string = 'react-tweet-parser__hashTag';
    @Input('target') target: string = '_blank';
    @Input('searchWithHashtags') searchWithHashtags: boolean = true;
    @Input('parseUsers') parseUsers : boolean = true;
    @Input('parseUrls') parseUrls :  boolean = true;
    @Input('parseHashtags') parseHashtags: boolean = true;
    @Input('tweet') tweet: string = '';

    myHtml: string = '';
    constructor() {
    }

    generateLink(url, urlClass, target, text) {
      return `<a href="${url}" className="${urlClass}" target="${target}">${text}</a>`;
    }

    ngOnChanges() {
      this.parseTweet();
    }

    ngOnInit(){
      this.parseTweet();
    }

    parseTweet() {
     const {urlClass, userClass, hashtagClass, target, searchWithHashtags, parseUsers, parseUrls, parseHashtags} = this;

     const REGEX_URL = /(?:\s)(f|ht)tps?:\/\/([^\s\t\r\n<]*[^\s\t\r\n<)*_,\.])/g, //regex for urls
                REGEX_USER = /\B@([a-zA-Z0-9_]+)/g, //regex for @users
                REGEX_HASHTAG = /\B(#[Ã¡-ÃºÃ-ÃÃ¤-Ã¼Ã-Ãa-zA-Z0-9_]+)/g; //regex for #hashtags
     let searchlink, myTweet = this.tweet; //search link for hashtags
      //Hashtag Search link
     if (searchWithHashtags) {
          //this is the search with hashtag
          searchlink = "https://twitter.com/hashtag/";
      } else {
          //this is a more global search including hashtags and the word itself
          searchlink = "https://twitter.com/search?q=";
      }
      //turn URLS in the tweet into... working urls
      if (parseUrls) {
          myTweet = myTweet.replace(REGEX_URL, (url) => {
              let link = this.generateLink(url, urlClass, target, url);
              return url.replace(url, link);
          });
      }
      //turn @users in the myTweet into... working urls
      if (parseUsers) {
          myTweet = myTweet.replace(REGEX_USER, (user) => {
              let userOnly = user.slice(1),
                  url = `http://twitter.com/${userOnly}`,
                  link = this.generateLink(url, userClass, target, user);
              return user.replace(user, link);
          });
      }
      //turn #hashtags in the myTweet into... working urls
      if (parseHashtags) {
          myTweet = myTweet.replace(REGEX_HASHTAG, (hashtag) => {
              let hashtagOnly = hashtag.slice(1),
                  url = searchlink + hashtagOnly,
                  link = this.generateLink(url, hashtagClass, target, hashtag);
              return hashtag.replace(hashtag, link);
          });
      }

      this.myHtml  = myTweet;
   }
}
