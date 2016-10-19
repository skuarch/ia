import {Injectable, NgZone} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import PouchDB from 'pouchdb';
import PouchDB_Plugin_QuickSearch from 'pouchdb-quick-search';
PouchDB.plugin(PouchDB_Plugin_QuickSearch);

@Injectable()
export class Policies {
  data: any;
  db: any;
  remote: any;
  zone: NgZone;

  constructor(private http: Http, zone: NgZone) {
    this.zone = zone;
    this.db = new PouchDB('cloudo');

    this.remote = 'https://jccastrejon.cloudant.com/policy';
    this.db.sync(this.remote, {
      live: true,
      retry: true,
      continuous: true,
      filter: 'localeFilter/localeFilter',
      query_params: { "locale": "test" }
    });

    this.db.changes({
      live: true, since: 'now',
      include_docs: true,
      attachments: true
    }).on('change', (change) => {
      this.zone.run(() => this.handleChange(change));
      console.log(change);
    });
  }

  searchItem(text: string) {
    return new Promise(resolve => {
      let returnValue = [];
      if (text && text.trim() != '') {
        this.db.search({
          query: text,
          fields: ['title'],
          highlighting: true
        }).then(function (searchResults) {
          console.log(searchResults);
          returnValue = searchResults.rows;
          resolve(returnValue);
        }).catch(function (err) {
          console.log(err);
        });
      } else {
        resolve(returnValue);
      }
    });
  }

  getPolicies() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.db.allDocs({
        include_docs: true,
        attachments: true
      }).then((result) => {
        this.data = [];
        result.rows.map((row) => {
          this.data.push(this.getItem(row.doc));
        });

        resolve(this.data);
      }).catch((error) => {
        console.log(error);
      });
    });
  }

  handleChange(change) {
    let changedDoc = null;
    let changedIndex = null;

    this.data.forEach((item, index) => {
      if (item.doc._id === change.id) {
        changedDoc = item.doc;
        changedIndex = index;
      }
    });

    //A document was deleted
    if (change.deleted) {
      this.data.splice(changedIndex, 1);
    }
    else {
      //A document was updated
      if (changedDoc) {
        this.data[changedIndex] = this.getItem(change.doc);
      }

      //A document was added
      else {
        this.data.push(this.getItem(change.doc));
      }
    }
  }

  getItem(row) {
    let newItem = { doc: row, attachments: [] };
    for (var key in row._attachments) {
      let newAttachment = { data: row._attachments[key].data, type: row._attachments[key].content_type };
      newItem.attachments.push(newAttachment);
    }

    return newItem;
  }
}