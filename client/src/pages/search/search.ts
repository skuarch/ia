import {Component} from "@angular/core";
import {Policies} from '../../providers/policies/policies';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class Search {
  constructor(private policiesService: Policies) {
  }
}