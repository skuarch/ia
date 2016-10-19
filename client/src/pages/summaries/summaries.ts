import {Component} from "@angular/core";
import {Policies} from '../../providers/policies/policies';

@Component({
  selector: 'page-summaries',
  templateUrl: 'summaries.html'
})
export class Summaries {
  constructor(private policiesService: Policies) {
  }
}