import {Component} from "@angular/core";
import {Policies} from '../../providers/policies/policies';

@Component({
  selector: 'page-summaries',
  templateUrl: 'summaries.html'
})
export class Summaries {
  policies: any;
  searchQuery: string = '';
  items: Object[];

  constructor(private policiesService: Policies) {
  }

  ionViewLoaded() {
    this.policiesService.getPolicies().then((data) => {
      this.policies = data;
    });
  }
}