import {Component} from "@angular/core";

@Component({
  selector: 'page-summaries',
  templateUrl: 'summaries.html'
})
export class Summaries {   

    public policies: string = `
[{
  "group":{
    "name": "group 1",
     "id": 1,
     "subGroup":[{
       "name": "sub group name 1",
       "id": 1,
       "policy":
       [
         {
           "title":"policy title 1",
           "id": 1
         },
         {
           "title":"policy title 2",
           "id": 2
         }
       ]
    },
    {
       "name": "sub group name 2",
       "id": 1,
       "policy":
       [
         {
           "title":"policy title 5",
           "id": 1
         },
         {
           "title":"policy title 6",
           "id": 2
         }
       ]
    }],
    "policies": [
      {
        "title":"policy title 3",
        "id": 3
      },
      {
        "title":"policy title 4",
        "id": 4
      }
    ]
  }          
}]
`;

  constructor() {
      this.policies = JSON.parse(this.policies)	;
  }

}