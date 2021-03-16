import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {crudapi} from '../crud/crudapi';


@Component({selector: 'app-home', templateUrl: 'home.page.html', styleUrls: ['home.page.scss']})
export class HomePage implements OnInit {

    a : any;
    b : any;
    constructor(private nav : NavController, private getcrud : crudapi) {}

    onclick() {
        this.nav.navigateForward('main')
    }

    ngOnInit() {

        this.getcrud.readData1().subscribe(data => {
            this.a = data.map(e => {
                return {
                    id: e.payload.doc.id,
                    Image: e.payload.doc.data()['image'.toString()],
                    name: e.payload.doc.data()['name'.toString()]
                }

            });
        });

        this.getcrud.readData2().subscribe(data1 => {
          this.b = data1.map(e => {
              return {
                  id: e.payload.doc.id,
                  Image: e.payload.doc.data()['image'.toString()]
              }

          });
      });


    }
}
