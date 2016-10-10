import {Component} from "@angular/core";
import {Policies} from '../../providers/policies/policies';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class Search {
  items: Object[];

  constructor(private policiesService: Policies) {
  }

  getItems(ev: any) {
    let val = ev.target.value;
    this.policiesService.searchItem(val).then((results: Object[]) => {
      this.items = results;
      console.log("results: " + results);
    });
  }
}