import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import PouchDB from 'pouchdb';
import PouchDB_Plugin_QuickSearch from 'pouchdb-quick-search';
PouchDB.plugin(PouchDB_Plugin_QuickSearch);

@Injectable()
export class Policies {

  constructor() {
  }
}