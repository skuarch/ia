import {Component} from "@angular/core";
import { Platform, NavParams, ViewController } from 'ionic-angular';

@Component({  
  templateUrl: 'policy-details.html'
})
export class PolicyDetails {

  public policy: any;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController) {      
      this.policy = this.params.get('policy');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}