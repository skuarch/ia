import { NgZone } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
export declare class Policies {
    private http;
    data: any;
    db: any;
    remote: any;
    zone: NgZone;
    constructor(http: Http, zone: NgZone);
    searchItem(text: string): Promise<{}>;
    getPolicies(): Promise<any>;
    handleChange(change: any): void;
    getItem(row: any): {
        doc: any;
        attachments: any[];
    };
}
