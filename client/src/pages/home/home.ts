import { Component, NgZone } from "@angular/core";
import { Platform } from 'ionic-angular';
import { Network } from 'ionic-native';

import {News} from '../../model/news/news';
import {NewsProvider} from '../../providers/news/newsProvider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
  latestNews: News;
  hasConnection: boolean;

  constructor(private newsService : NewsProvider, public platform: Platform, public zone: NgZone) {
    this.initHome();
  }

  initHome() {
    this.platform.ready().then(() => {
      this.initNews();
      this.initConnectivity();
    });
  }

  initNews() {
    this.newsService.getLatest().then((news) => {
      this.latestNews = news;
    });
  }

  initConnectivity() {
    this.platform.ready().then(x => {
      Network.onDisconnect().subscribe(x => {
        this.zone.run(() => { this.onNetworkDisconnect(); });
      });

      Network.onConnect().subscribe(x => {
        this.zone.run(() => { this.onNetworkConnect(); });
      });

      this.hasConnection = Network.connection != 'none';
    });
  }

  private onNetworkDisconnect(): void {
    this.hasConnection = false;
    console.log('Connection lost!', this.hasConnection, Network.connection);
  }

  private onNetworkConnect(): void {
    let self = this;
    setTimeout(function () {
      self.hasConnection = Network.connection != 'none';
      console.log('Connection restored!', self.hasConnection, Network.connection);
    }, 2000);
  }
}