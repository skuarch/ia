import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Summaries } from '../pages/summaries/summaries';
import { Search } from '../pages/search/search';
import { Policies } from '../providers/policies/policies';
import { Storage } from '@ionic/storage';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http } from '@angular/http';
var storage = new Storage();
export function getAuthHttp(http) {
    return new AuthHttp(new AuthConfig({
        headerPrefix: "Bearer",
        noJwtError: true,
        globalHeaders: [{ 'Accept': 'application/json' }],
        tokenGetter: (function () { return storage.get('id_token'); }),
    }), http);
}
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MyApp,
                        Summaries,
                        Search
                    ],
                    imports: [
                        IonicModule.forRoot(MyApp)
                    ],
                    bootstrap: [IonicApp],
                    entryComponents: [
                        MyApp,
                        Summaries,
                        Search
                    ],
                    providers: [
                        Policies,
                        {
                            provide: AuthHttp,
                            useFactory: getAuthHttp,
                            deps: [Http]
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
