import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { iValue } from './app.component';

// pages
import { Home } from "../pages/home/home";
import { Summaries } from '../pages/summaries/summaries';
import { Search } from '../pages/search/search';

// providers
import { Policies } from '../providers/policies/policies';


@NgModule({
  declarations: [
    iValue,
    Home,
    Summaries,
    Search
  ],
  imports: [
    IonicModule.forRoot(iValue)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    iValue,
    Home,
    Summaries,
    Search
  ],
  providers: [
    Policies
  ]
})
export class AppModule {}