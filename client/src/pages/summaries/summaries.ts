import {Component} from "@angular/core";
import {NavController, AlertController, Platform} from 'ionic-angular';
import {Policies} from '../../providers/policies/policies';

import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { InAppBrowser } from 'ionic-native';

@Component({
  selector: 'page-summaries',
  templateUrl: 'summaries.html'
})
export class Summaries {
  policies: any;
  searchQuery: string = '';
  items: Object[];

  constructor(public platform: Platform, public authHttp: AuthHttp, private nav: NavController, private policiesService: Policies, private alertController: AlertController) {
    //this.login();
  }

  ionViewLoaded() {
    this.policiesService.getPolicies().then((data) => {
      this.policies = data;
    });
  }

  public login() {
    if (!tokenNotExpired('access_token2')) {
      this.platform.ready().then(() => {
        this.loginProcess().then(success => {
          // success
        }, (error) => {
          // error
        });
      });
    }

  }

  public loginProcess(): Promise<any> {
    var counter = 0;
    var clientLanguage = "en";

    return new Promise(function (resolve, reject) {
      var browserRef = new InAppBrowser("172.25.36.74:8090:8090", "_blank", "location=no");
      browserRef.on("loadstart").subscribe((event) => {      
        resolve(true);
      });
    });
  }
}