import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import {TranslateService} from 'ng2-translate/ng2-translate';

import { Home } from '../pages/home/home';
import { Summaries } from '../pages/summaries/summaries';
import { Search } from '../pages/search/search';


@Component({
  templateUrl: 'app.html'
})
export class iValue {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;

  pages: Array<{ title: string, component: any }>;

  constructor(public translate: TranslateService, public platform: Platform) {
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
      this.translate.setDefaultLang('en');
      this.translate.use('en');
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}