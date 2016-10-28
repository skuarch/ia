import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

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


   openPage(){
    //let modal = this.modalCtrl.create(ModalPage);
    //modal.present();
  }
  
}