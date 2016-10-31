import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { PolicyDetails } from './policy-details';

@Component({
    templateUrl: 'policy.html'
})
export class Policy {

    public array: string;
    public isPolicyDisplayed = false;

    constructor(public modalCtrl: ModalController){
       this.array =
`
[
    {
        "name": "section name 1",
        "id": 1,
        "subsections":
        [
            {
                "name":"subsection name 1",
                "id": 1,
                "policies":
                [
                    {
                        "title": "pol sub 1",
                        "id": 10
                    }
                ]
            },
            {
                "name":"subsection name 2",
                "id": 2,
                "policies":
                [
                    {
                        "title": "pol sub 2",
                        "id": 10
                    }
                ]
            }            
        ],
        "policies":
        [
            {
                "title": "policy sec 1",
                "id": 1
            }
        ]        
    },
    {
        "name": "section name 2",
        "id": 1,
        "subsections":
        [
            {
                "name":"subsection name 2",
                "id": 1,
                "policies":
                [
                    {
                        "title": "pol sub 2",
                        "id": 10
                    }
                ]
            },
            {
                "name":"subsection name 3",
                "id": 2,
                "policies":
                [
                    {
                        "title": "pol sub 3",
                        "id": 10
                    }
                ]
            }            
        ],
        "policies":
        [
            {
                "title": "pol sec 2",
                "id": 1
            }
        ]        
    },
    {
        "name": "section name 3",
        "id": 1,
        "subsections":
        [
            {
                "name":"subsection name 1",
                "id": 1,
                "policies":
                [
                    {
                        "title": "pol sub 1",
                        "id": 10
                    }
                ]
            },
            {
                "name":"subsection name 2",
                "id": 2,
                "policies":
                [
                    {
                        "title": "pol sub 2",
                        "id": 10
                    }
                ]
            }            
        ],
        "policies":
        [
            {
                "title": "pol sec 3",
                "id": 1
            }
        ]        
    }
    
]
`;
this.array = JSON.parse(this.array);
    }


  openPage(policy){
    let modal = this.modalCtrl.create(PolicyDetails, {"policy":policy});
    modal.present();
  }

  showPolicies(subsection){

      if(this.isPolicyDisplayed){
          this.isPolicyDisplayed = false;
      }else{
          this.isPolicyDisplayed = true;
      }

      console.log("se deben de mostrar las politicas", subsection);
      var policies: any = subsection.policies;
      for(let policy of policies){   
          let element = 'policy' + policy.id;
          let button = document.getElementById('' + element + '');                    
          console.log("button ",button);
      }
  }
  
}