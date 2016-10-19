import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { PolicyApp } from './app.component';
import { Policies } from '../providers/policies/policies';

// Pages
import { Home } from "../pages/home/home";
import { Summaries } from '../pages/summaries/summaries';
import { Search } from '../pages/search/search';

///JWT Config
import { AuthHttp, AuthConfig} from 'angular2-jwt';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

let storage = new Storage();

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: "Bearer",
    noJwtError: true,
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => storage.get('access_token2')),
  }), http);
}

@NgModule({
  declarations: [
    PolicyApp,
    Home,
    Summaries,
    Search
  ],
  imports: [
    IonicModule.forRoot(PolicyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PolicyApp,
    Home,
    Summaries,
    Search
  ],
  providers: [
    Policies,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps:[Http]
    }
  ]
})
export class AppModule {}
