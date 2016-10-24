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
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.initStyle();
      this.initLanguage();
      this.initMenu();
    });
  }

  initStyle() {
    if (StatusBar) {
      StatusBar.styleDefault();
    }
  }

  initLanguage() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  initMenu() {
    this.translate.get(['home.title', 'policies.title', 'search.title']).subscribe((results) => {
      this.pages = [
        { title: results['home.title'], component: Home },
        { title: results['policies.title'], component: Summaries },
        { title: results['search.title'], component: Search }
      ];
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}