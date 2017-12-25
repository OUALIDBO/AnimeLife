import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewAnimPage} from '../new-anim/new-anim';
import PouchDB from 'pouchdb';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private anims;
  private db;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter() {
    this.refresh();
  }

  refresh() {

    this.db = new PouchDB('anims');

    this.anims = [];

    this.db.allDocs({include_docs: true}, (err,result) => {

        if(!err) {
          let rows = result.rows;

          for(let i=0; i<rows.length; i++){
            this.anims.push(rows[i].doc);
          }
        }

    })

  }

  createNew(){
      this.navCtrl.push(NewAnimPage);
  }

  edit(anim){
    this.navCtrl.push(NewAnimPage, {

        anim_id: anim._id

    });
  }


  delete(anim){

        if(confirm('Are you sure ?')){

            this.db.remove(anim, (err, result) => {
              if(!err){

                alert("Anime deleted successfully !");

                this.refresh();
              }

            });
        }
  }
}
