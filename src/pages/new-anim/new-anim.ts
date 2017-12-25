import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnimApiService } from '../../services/animapi.service'
import {AnimApiGlobal} from '../../models/animapi-global.model';
import {HomePage} from '../home/home';

@IonicPage()
@Component({
  selector: 'page-new-anim',
  templateUrl: 'new-anim.html',
})
export class NewAnimPage {

  public NewAnimTitle : string;
  public label_title : string;
  public label_author : string;
  public label_image : string;
  public label_date : string;

  public button_label_save : string;
  public button_label_cancel : string;

  //public collectedanims: AnimApiGlobal = new AnimApiGlobal();

  constructor(public navCtrl: NavController, public navParams: NavParams,private animApiService: AnimApiService) {

    this.NewAnimTitle = "Create new anime";

  }



  ionViewDidLoad() {

    this.label_title = "Title";
    this.label_author = "Author";
    this.label_image = "Image URL";
    this.label_date = "date";
    this.button_label_save = "Save";
    this.button_label_cancel = "Cancel";

    //this.getAnim();

  }


  /*getAnim(){

    this.animApiService.getAnimService()
    .then(animFetched => {
      this.collectedanims = animFetched;
    });


  }*/

  addAnim(title,author,image,date){

      this.animApiService.addAnimService(title,author,image,date);
      //this.getAnim();
      console.log('addAnim',title);
      this.navCtrl.pop();
  }




  cancel(){
      this.navCtrl.pop();
  }


}
