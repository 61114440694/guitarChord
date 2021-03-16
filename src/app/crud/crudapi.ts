import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
@Injectable({providedIn: 'root'})

export class crudapi {

    readData1() {
        return this.fs.collection('menuOpen').snapshotChanges();
    }
    readData2() {
        return this.fs.collection('menuOpenLast').snapshotChanges();
    }
    readData3() {
        return this.fs.collection('Menu').snapshotChanges();
    }
    readchord(id) {
      console.log(id);
      return this.fs.collection(id).snapshotChanges();

    }


    createData(id){
      console.log(id);
      return this.fs.collection(id).snapshotChanges();
    }
    updataData() {}
    deleteData(cid,did) {
      this.fs.doc(cid +"/"+did).delete();
    }


    constructor(private fs : AngularFirestore) { // CURD


    }
}
