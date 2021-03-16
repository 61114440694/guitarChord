import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {crudapi} from '../crud/crudapi';
import { AlertController } from '@ionic/angular';

@Component({selector: 'app-main', templateUrl: './main.page.html', styleUrls: ['./main.page.scss']})
export class MainPage implements OnInit {
    store : any;
    order : any;
    loop : any = [];
    mySelect: any;
    x : any;


    constructor(private nav : NavController, private getcrud : crudapi,public alertController: AlertController) {}

    ngOnInit() { // <-------------------------------- ดึงค่าจาก firebase --------------------------------->

        this.getcrud.readData3().subscribe(data => {
            this.store = data.map(e => {
                return {
                    id: e.payload.doc.id, name: e.payload.doc.data()['name'.toString()]
                }

            });
        });
    }
    // <--------------------------------  ปุ่ม CHORD --------------------------------->
    go(items) {
        this.getcrud.readchord(items.name).subscribe(data => {
            this.order = data.map(e => {
                return {
                    id: e.payload.doc.id, image: e.payload.doc.data()['image'.toString()],
                    name: e.payload.doc.data()['name'.toString()]
                }

            });
            this.mySelect = items.name;
            console.log("SELECT => ",this.mySelect);
        });


    }

    async delete(cid,did) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Confirm!',
        message: ' <strong>delete to here</strong>!!!',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Okay',
            handler: () => {
              this.getcrud.deleteData(cid,did);
            }
          }
        ]
      });

      await alert.present();
    }

}
