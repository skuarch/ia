import { NavController, AlertController, Platform } from 'ionic-angular';
import { Policies } from '../../providers/policies/policies';
import { AuthHttp } from 'angular2-jwt';
export declare class Summaries {
    platform: Platform;
    authHttp: AuthHttp;
    private nav;
    private policiesService;
    private alertController;
    policies: any;
    searchQuery: string;
    items: Object[];
    constructor(platform: Platform, authHttp: AuthHttp, nav: NavController, policiesService: Policies, alertController: AlertController);
    ionViewLoaded(): void;
    login(): void;
    loginProcess(): Promise<any>;
}
