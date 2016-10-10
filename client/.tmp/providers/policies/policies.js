import { Injectable, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import PouchDB from 'pouchdb';
import PouchDB_Plugin_QuickSearch from 'pouchdb-quick-search';
PouchDB.plugin(PouchDB_Plugin_QuickSearch);
export var Policies = (function () {
    function Policies(http, zone) {
        var _this = this;
        this.http = http;
        this.zone = zone;
        this.db = new PouchDB('cloudo');
        this.remote = 'http://localhost:15984/policies';
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
            attachments: true }).on('change', function (change) {
            _this.zone.run(function () { return _this.handleChange(change); });
            console.log(change);
        });
    }
    Policies.prototype.searchItem = function (text) {
        var _this = this;
        return new Promise(function (resolve) {
            var returnValue = [];
            if (text && text.trim() != '') {
                _this.db.search({
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
            }
            else {
                resolve(returnValue);
            }
        });
    };
    Policies.prototype.getPolicies = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.db.allDocs({
                include_docs: true,
                attachments: true
            }).then(function (result) {
                _this.data = [];
                result.rows.map(function (row) {
                    _this.data.push(_this.getItem(row.doc));
                });
                resolve(_this.data);
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    Policies.prototype.handleChange = function (change) {
        var changedDoc = null;
        var changedIndex = null;
        this.data.forEach(function (item, index) {
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
            else {
                this.data.push(this.getItem(change.doc));
            }
        }
    };
    Policies.prototype.getItem = function (row) {
        var newItem = { doc: row, attachments: [] };
        for (var key in row._attachments) {
            var newAttachment = { data: row._attachments[key].data, type: row._attachments[key].content_type };
            newItem.attachments.push(newAttachment);
        }
        return newItem;
    };
    Policies.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    Policies.ctorParameters = [
        { type: Http, },
        { type: NgZone, },
    ];
    return Policies;
}());
