import { Component } from "@angular/core";
import { Policies } from '../../providers/policies/policies';
export var Search = (function () {
    function Search(policiesService) {
        this.policiesService = policiesService;
    }
    Search.prototype.getItems = function (ev) {
        var _this = this;
        var val = ev.target.value;
        this.policiesService.searchItem(val).then(function (results) {
            _this.items = results;
            console.log("results: " + results);
        });
    };
    Search.decorators = [
        { type: Component, args: [{
                    selector: 'page-search',
                    templateUrl: 'search.html'
                },] },
    ];
    /** @nocollapse */
    Search.ctorParameters = [
        { type: Policies, },
    ];
    return Search;
}());
