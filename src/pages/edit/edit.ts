import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnimApiService } from '../../services/animapi.service'
import {AnimApiGlobal} from '../../models/animapi-global.model';
import {HomePage} from '../home/home';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  public data : Array<any>= new Array<any>();
  public collectedanims: AnimApiGlobal = new AnimApiGlobal();

  public EditAnimTitle : string;
  public label_title : string;
  public label_id: string
  public label_author : string;
  public label_image : string;
  public label_date : string;

  public button_label_save : string;
  public button_label_cancel : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private animApiService: AnimApiService) {
    this.EditAnimTitle = "Edit anime";
    this.getAnim();
  }

  getAnim(){

    this.animApiService.getAnimService()
    .then(animFetched => {
      this.collectedanims = animFetched;
    });

  }

  ionViewDidLoad() {
    this.label_id = "ID";
    this.label_title = "Title";
    this.label_author = "Author";
    this.label_image = "Image URL";
    this.label_date = "date";
    this.button_label_save = "Save";
    this.button_label_cancel = "Cancel";


    let id = this.navParams.get('id');
    let title = this.navParams.get('title');
    let author = this.navParams.get('author');
    let image = this.navParams.get('image');
    let date = this.navParams.get('date');

    this.data.push({ id: id, title: title, author: author, image:image,date: date});
    console.log('edit.ts data',this.data);
    this.getAnim();
  }



  cancel(){
      this.navCtrl.pop();
  }

  EditAnim(id,title,author,image,date){
      console.log('EditAnim ',title);
      this.animApiService.EditAnimService(id,title,author,image,date);

      this.getAnim();
      this.navCtrl.pop();
  }

}
