import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import PouchDB from 'pouchdb';
/**
 * Generated class for the NewAnimPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-anim',
  templateUrl: 'new-anim.html',
})
export class NewAnimPage {

  private title;
  private author;
  private db;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  setupDB(){

    this.db = new PouchDB('anims');

  }

  ionViewDidLoad() {

    this.setupDB();
    console.log('ionViewDidLoad NewAnimPage');

  }

  save(){
    this.db.post({

      title: this.title,
      author: this.author

    }, (err, result) => {

        if(!err){
          alert('Anim added successfully !');

          this.navCtrl.pop();
        }
  });

  }

  cancel(){
    this.navCtrl.pop();
  }

}
