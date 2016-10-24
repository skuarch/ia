import {Component} from "@angular/core";
import {News} from '../../providers/news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
  constructor(public newsService : News) {
  }
}