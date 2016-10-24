import {Component} from "@angular/core";
import { Platform } from 'ionic-angular';
import {News} from '../../model/news/news';
import {NewsProvider} from '../../providers/news/newsProvider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
  latestNews: News;

  constructor(private newsService : NewsProvider, public platform: Platform) {
    this.initHome();
  }

  initHome() {
    this.platform.ready().then(() => {
      this.initNews();
    });
  }

  initNews() {
    this.newsService.getLatest().then((news) => {
      this.latestNews = news;
    });
  }
}