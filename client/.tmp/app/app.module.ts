import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Summaries } from '../pages/summaries/summaries';
import { Search } from '../pages/search/search';
import { Policies } from '../providers/policies/policies';

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
    Policies
  ]
})
export class AppModule {}
