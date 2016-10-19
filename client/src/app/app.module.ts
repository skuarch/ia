import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { PolicyApp } from './app.component';
import { Policies } from '../providers/policies/policies';

// Pages
import { Home } from "../pages/home/home";
import { Summaries } from '../pages/summaries/summaries';
import { Search } from '../pages/search/search';


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
    Policies
  ]
})
export class AppModule {}