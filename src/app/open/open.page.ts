import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { timer } from 'rxjs';

@Component({
  selector: 'app-open',
  templateUrl: './open.page.html',
  styleUrls: ['./open.page.scss'],
})
export class OpenPage implements OnInit {

  constructor(private nav : NavController) { }


  ngOnInit() {
    this.Timer();
  }

  Timer() {
    setTimeout(() => {
        this.nav.navigateForward('home');
    }, 1500);
}





}
