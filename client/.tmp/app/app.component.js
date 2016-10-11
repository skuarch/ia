import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Summaries } from '../pages/summaries/summaries';
import { Search } from '../pages/search/search';
export var MyApp = (function () {
    function MyApp(platform) {
        this.platform = platform;
        this.rootPage = Summaries;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Summaries', component: Summaries },
            { title: 'Search', component: Search }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            StatusBar.styleDefault();
            var notificationOpenedCallback = function (jsonData) {
                console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
            };
            if (window["plugins"]) {
                window["plugins"].OneSignal
                    .startInit("2a9cbe61-3dd7-4b61-b0e4-bb1ec7f2163d", "739697796337")
                    .handleNotificationOpened(notificationOpenedCallback)
                    .endInit();
                // Show an alert box if a notification comes in when the user is in your app.
                window["plugins"].OneSignal.enableInAppAlertNotification(true);
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'app.html'
                },] },
    ];
    /** @nocollapse */
    MyApp.ctorParameters = [
        { type: Platform, },
    ];
    MyApp.propDecorators = {
        'nav': [{ type: ViewChild, args: [Nav,] },],
    };
    return MyApp;
}());
