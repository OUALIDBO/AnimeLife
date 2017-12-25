import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';




@IonicPage()
@Component({
  selector: 'page-show-one',
  templateUrl: 'show-one.html',
})


export class ShowOnePage {

  public ShowOneTitle : string;
   public data : Array<any> = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.ShowOneTitle = "ShowOne";

  }

  ionViewDidLoad(){
    let id = this.navParams.get('id');
    let title = this.navParams.get('title');
    let author = this.navParams.get('author');
    let image = this.navParams.get('image');
    let date = this.navParams.get('date');

    this.data.push({ id: id, title: title, author: author, image:image,date: date});

     console.log('in view show one',this.data);
  }



}
