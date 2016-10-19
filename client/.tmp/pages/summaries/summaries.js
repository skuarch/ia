import { Component } from "@angular/core";
import { NavController, AlertController, Platform } from 'ionic-angular';
import { Policies } from '../../providers/policies/policies';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
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
        alert(tokenNotExpired('access_token2'));
        if (!tokenNotExpired('access_token2')) {
            this.platform.ready().then(function () {
                _this.loginProcess().then(function (success) {
                    // success
                }, function (error) {
                    // error
                });
            });
        }
    };
    Summaries.prototype.loginProcess = function () {
        var counter = 0;
        var clientLanguage = "en";
        return new Promise(function (resolve, reject) {
            var browserRef = new InAppBrowser("172.25.36.74:8090:8090", "_blank", "location=no");
            browserRef.on("loadstart").subscribe(function (event) {
                browserRef.executeScript({ code: "alert('asd')" });
                resolve(true);
                /* if ((event.url).indexOf("172.25.36.74:8090") === 0) {
                   //counter += 1;
                   //if (counter == 2) {
                     browserRef.executeScript({ code: "alert(1); return 1;" })
                       .then(function (result) { clientLanguage = result });
                     browserRef.close();
                     resolve(clientLanguage);
                   //}
                 }*/
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
