import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Summaries } from '../pages/summaries/summaries';
import { Search } from '../pages/search/search';
import { Policies } from '../providers/policies/policies';
import { Storage } from '@ionic/storage';
///JWT Config
import { AuthHttp, AuthConfig} from 'angular2-jwt';
import { Http } from '@angular/http';

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
      deps:[Http]
    }
  ]
})
export class AppModule {}
