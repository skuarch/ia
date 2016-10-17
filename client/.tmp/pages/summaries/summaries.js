import { Component } from "@angular/core";
import { NavController, AlertController, Platform } from 'ionic-angular';
import { Policies } from '../../providers/policies/policies';
import { AuthHttp } from 'angular2-jwt';
import { InAppBrowser } from 'ionic-native';
export var Summaries = (function () {
    function Summaries(platform, authHttp, nav, policiesService, alertController) {
        this.platform = platform;
        this.authHttp = authHttp;
        this.nav = nav;
        this.policiesService = policiesService;
        this.alertController = alertController;
        this.searchQuery = '';
        /*this.authHttp.get('http://google.com')
          .subscribe(
          data => console.log(data),
          err => console.log(err),
          () => console.log('Request Complete')
          );*/
        this.login();
    }
    Summaries.prototype.ionViewLoaded = function () {
        var _this = this;
        this.policiesService.getPolicies().then(function (data) {
            _this.policies = data;
        });
    };
    Summaries.prototype.login = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.loginProcess().then(function (success) {
                // success
            }, function (error) {
                // error
            });
        });
    };
    Summaries.prototype.loginProcess = function () {
        var counter = 0;
        var clientLanguage = "en";
        return new Promise(function (resolve, reject) {
            var browserRef = new InAppBrowser("https://wd3.myworkday.com/astrazeneca/d/task/2998$2725.htmld", "_blank", "location=no");
            browserRef.on("loadstart").subscribe(function (event) {
                if ((event.url).indexOf("https://wd3.myworkday.com/astrazeneca/d/task/2998$2725.htmld") === 0) {
                    counter += 1;
                    if (counter == 2) {
                        browserRef.executeScript({ code: "alert(1); return 1;" })
                            .then(function (result) { clientLanguage = result; });
                        browserRef.close();
                        resolve(clientLanguage);
                    }
                }
            });
        });
    };
    Summaries.decorators = [
        { type: Component, args: [{
                    selector: 'page-summaries',
                    templateUrl: 'summaries.html'
                },] },
    ];
    /** @nocollapse */
    Summaries.ctorParameters = [
        { type: Platform, },
        { type: AuthHttp, },
        { type: NavController, },
        { type: Policies, },
        { type: AlertController, },
    ];
    return Summaries;
}());
