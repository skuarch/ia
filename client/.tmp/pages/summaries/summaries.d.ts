import { NavController, AlertController } from 'ionic-angular';
import { Policies } from '../../providers/policies/policies';
export declare class Summaries {
    private nav;
    private policiesService;
    private alertController;
    policies: any;
    searchQuery: string;
    items: Object[];
    constructor(nav: NavController, policiesService: Policies, alertController: AlertController);
    ionViewLoaded(): void;
}
