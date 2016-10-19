import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { Home } from '../pages/home/home';
import { Summaries } from '../pages/summaries/summaries';
import { Search } from '../pages/search/search';


@Component({
  templateUrl: 'app.html'
})
export class PolicyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: Home },
      { title: 'Summaries', component: Summaries },
      { title: 'Search', component: Search }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();

      var notificationOpenedCallback = function (jsonData) {
        console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
      };

      if (window["plugins"]) {
        window["plugins"].OneSignal
          .startInit("2a9cbe61-3dd7-4b61-b0e4-bb1ec7f2163d", "739697796337")
          .handleNotificationOpened(notificationOpenedCallback)
          .endInit();

        // Show an alert box if a notification comes in when the user is in your app.
        window["plugins"].OneSignal.enableInAppAlertNotification(true);
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}