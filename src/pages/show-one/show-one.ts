import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import PouchDB from 'pouchdb';

/**
 * Generated class for the ShowOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-one',
  templateUrl: 'show-one.html',
})
export class ShowOnePage {

  private title;
  private author;
  private db;
  private anim; // anim we want to show


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  setupDB(){

    this.db = new PouchDB('anims');

  }


  ionViewDidLoad() {

    this.setupDB();

    if(this.navParams.get('anim_id') != null) {

          this.db.get(this.navParams.get('anim_id'));

    }

  }

}
