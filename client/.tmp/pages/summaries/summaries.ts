import {Component} from "@angular/core";
import {NavController, AlertController} from 'ionic-angular';
import {Policies} from '../../providers/policies/policies';

@Component({
  selector: 'page-summaries',
  templateUrl: 'summaries.html'
})
export class Summaries {
  policies: any;
  searchQuery: string = '';
  items: Object[];

  constructor(private nav: NavController, private policiesService: Policies, private alertController: AlertController) {
  }

  ionViewLoaded() {
    this.policiesService.getPolicies().then((data) => {
      this.policies = data;
    });
  }
}