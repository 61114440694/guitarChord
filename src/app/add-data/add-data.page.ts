import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.page.html',
  styleUrls: ['./add-data.page.scss'],
})
export class AddDataPage implements OnInit {
  Idata: any;



  constructor(private nav : NavController ,private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.Idata = this.activatedRoute.snapshot.paramMap.get('item');
    this.Idata = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.Idata);
  }

  ok(name,Image){
    this.nav.navigateForward(['/main',name+Image])
  }


  cancel(){
    this.nav.pop()
  }

}
