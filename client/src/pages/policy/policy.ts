import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { PolicyDetails } from './policy-details';

@Component({
    templateUrl: 'policy.html'
})
export class Policy {

    public array: string;        

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
                "id": 2,
                "policies":
                [
                    {
                        "title": "pol sub 1",
                        "id": 3
                    }
                ],
                "subsections":
                [
                  {
                    "name":"sub-sub-section name 1",
                    "id": 22,
                    "policies":
                     [
                       {
                         "title": "pol sub sub 2",
                         "id": 23
                       }
                     ]
                   },
                   {
                    "name":"sub-sub-section name 2",
                    "id": 24,
                    "policies":
                     [
                       {
                         "title": "pol sub sub 4",
                         "id": 25
                       }
                     ]
                   }        
                ]
            },
            {
                "name":"subsection name 2",
                "id": 4,
                "policies":
                [
                    {
                        "title": "pol sub 2",
                        "id": 5
                    }
                ]
            },
            {
                "name":"subsection name 3",
                "id": 20,
                "policies":
                [
                    {
                        "title": "pol sub 5",
                        "id": 21
                    }
                ]
            }            
        ],
        "policies":
        [
            {
                "title": "policy sec 1",
                "id": 6
            }
        ]        
    },
    {
        "name": "section name 2",
        "id": 7,
        "subsections":
        [
            {
                "name":"subsection name 2",
                "id": 8,
                "policies":
                [
                    {
                        "title": "pol sub 2",
                        "id": 9
                    }
                ]
            },
            {
                "name":"subsection name 3",
                "id": 10,
                "policies":
                [
                    {
                        "title": "pol sub 3",
                        "id": 11
                    }
                ]
            }            
        ],
        "policies":
        [
            {
                "title": "pol sec 2",
                "id": 12
            }
        ]        
    },
    {
        "name": "section name 3",
        "id": 13,
        "subsections":
        [
            {
                "name":"subsection name 1",
                "id": 14,
                "policies":
                [
                    {
                        "title": "pol sub 1",
                        "id": 15
                    }
                ]
            },
            {
                "name":"subsection name 2",
                "id": 16,
                "policies":
                [
                    {
                        "title": "pol sub 2",
                        "id": 17
                    }
                ]
            }            
        ],
        "policies":
        [
            {
                "title": "pol sec 3",
                "id": 18
            },
            {
                "title": "pol sec 4",
                "id": 19
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

      console.log('showPolicies subsection ', subsection);     
      var policies: any = subsection.policies;
      for(let policy of policies){

          let element = 'policy' + policy.id;console.log('elemetn',element);
          let button: HTMLElement = document.getElementById('' + element + '');
          let buttonStyle: any = button.style;

          if(buttonStyle.display == 'inline'){
            button.style.display = "none";            
          }else{
            button.style.display = "inline";              
          }
          
      }
  }


  showSubSections(subsection){

    console.log('showSubSections subsection ', subsection);

    var subsections: any = subsection.subsections;
      for(let subsection of subsections){

          let element = 'subsub' + subsection.id;
          let list: HTMLElement = document.getElementById('' + element + '');
          let listStyle: any = list.style;

          if(listStyle.display == 'inline'){
            list.style.display = "none";            
          }else{
            list.style.display = "inline";              
          }
          
      }

  }
  
}