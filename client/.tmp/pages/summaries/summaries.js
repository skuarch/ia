import { Component } from "@angular/core";
import { NavController, AlertController } from 'ionic-angular';
import { Policies } from '../../providers/policies/policies';
export var Summaries = (function () {
    function Summaries(nav, policiesService, alertController) {
        this.nav = nav;
        this.policiesService = policiesService;
        this.alertController = alertController;
        this.searchQuery = '';
    }
    Summaries.prototype.ionViewLoaded = function () {
        var _this = this;
        this.policiesService.getPolicies().then(function (data) {
            _this.policies = data;
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
        { type: NavController, },
        { type: Policies, },
        { type: AlertController, },
    ];
    return Summaries;
}());
