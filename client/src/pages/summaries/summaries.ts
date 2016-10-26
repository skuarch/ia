import {Component} from "@angular/core";

@Component({
  selector: 'page-summaries',
  templateUrl: 'summaries.html'
})
export class Summaries {   

    public json: string = `
[{
  "group":{
    "name": "Bussiness Activity",
     "id": 1,
     "subGroup":[{
         "name": "Meetings",
         "id": 1,
         "policy":
         [
           {
             "title":"Policy Meetings 1",
             "id": 1
           },
           {
             "title":"Policy Meetings 2",
             "id": 2
           }
         ]
      },
      {
         "name": "Appointments",
         "id": 1,
         "policy":
         [
           {
             "title":"Policy Appointments 1",
             "id": 3
           },
           {
             "title":"Policy Appointments 2",
             "id": 4
           }
         ]
      },
      {
         "name": "Advisory Boards",
         "id": 1,
         "policy":
         [
           {
             "title":"Policy Advisory Boards 1",
             "id": 3
           },
           {
             "title":"Policy Advisory Boards 2",
             "id": 4
           }
         ]
      }


    ],
    "policies": 
    [
      {
        "title":"Policy Bussiness Activity 1",
        "id": 5
      },
      {
        "title":"Policy Bussiness Activity 2",
        "id": 6
      }
    ]
  }          
},
{
  "group":{
    "name": "Compilance Area",
     "id": 2,
     "subGroup":[{
         "name": "Items of value",
         "id": 2,
         "policy":
         [
           {
             "title":"policy Items of value 1",
             "id": 7
           },
           {
             "title":"policy Items of value 2",
             "id": 8
           }
         ]
      },
      {
         "name": "Spend Limits",
         "id": 3,
         "policy":
         [
          {
             "title":"Policy Spend Limits 1",
             "id": 7
           },
           {
             "title":"Policy Spend Limits 2",
             "id": 8
           }
         ]
      },
      {
         "name": "Expenses",
         "id": 3,
         "policy":
         [
          {
             "title":"Policy Expenses 1",
             "id": 7
           },
           {
             "title":"Policy Expenses 2",
             "id": 8
           }
         ]
      }


    ],
    "policies": 
    [
      {
        "title":"policy Compilance Area 1",
        "id": 11
      },
      {
        "title":"policy Compilance Area 2",
        "id": 12
      }
    ]
  }          
}
]
`;

  constructor() {
      this.json = JSON.parse(this.json)	;
  }

}