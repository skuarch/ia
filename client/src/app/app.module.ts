import {BrowserModule} from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';
import { iValue } from './app.component';
import {TranslateModule, TranslateStaticLoader} from "ng2-translate/ng2-translate";
import {TranslateLoader} from "ng2-translate";

// pages
import { Home } from "../pages/home/home";
import { Policy } from '../pages/policy/policy';
import { Search } from '../pages/search/search';
import { PolicyDetails } from '../pages/policy/policy-details';

// providers
import { NewsProvider } from '../providers/news/newsProvider';
import { Policies } from '../providers/policies/policies';

export function translateLoaderFactory(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    iValue,
    Home,
    Policy,
    Search,
    PolicyDetails
  ],
  imports: [
    IonicModule.forRoot(iValue),
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
    provide: TranslateLoader,
       useFactory: translateLoaderFactory,
       deps: [Http]
   })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    iValue,
    Home,
    Policy,
    Search,
    PolicyDetails
  ],
  providers: [
    NewsProvider,
    Policies
  ]
})
export class AppModule {}