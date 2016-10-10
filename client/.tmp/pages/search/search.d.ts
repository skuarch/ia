import { Policies } from '../../providers/policies/policies';
export declare class Search {
    private policiesService;
    items: Object[];
    constructor(policiesService: Policies);
    getItems(ev: any): void;
}
