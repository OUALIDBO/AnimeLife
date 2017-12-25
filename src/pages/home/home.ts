import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewAnimPage} from '../new-anim/new-anim';
import { ShowOnePage} from '../show-one/show-one';
import { EditPage} from '../edit/edit';
import { AnimApiService } from '../../services/animapi.service'
import {AnimApiGlobal} from '../../models/animapi-global.model';





@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public HomeTitle : string;

  public collectedanims: AnimApiGlobal = new AnimApiGlobal();


  constructor(public navCtrl: NavController, private animApiService: AnimApiService) {

        this.HomeTitle = "Life is Anime";
        this.getAnim();
  }


  ionViewDidEnter(){
      this.getAnim();
  }

  ionViewDidLoad(){
      this.getAnim();
  }

  getAnim(){

    this.animApiService.getAnimService()
    .then(animFetched => {
      this.collectedanims = animFetched;
    });


  }


  createNew(){

      this.navCtrl.push(NewAnimPage);
  }

  ShowOne(clickedID){

      let id = this.collectedanims.anime[clickedID-1].id;
      let title = this.collectedanims.anime[clickedID-1].title;
      let author = this.collectedanims.anime[clickedID-1].author;
      let image = this.collectedanims.anime[clickedID-1].image;
      let date = this.collectedanims.anime[clickedID-1].date;

      let data = {
        id:id,
        title:title,
        author:author,
        image:image,
        date: date
      };
      console.log('showone id',data.id);
      this.navCtrl.push(ShowOnePage,data);
  }


  delete(clickedID){

      this.animApiService.deleteAnimService(clickedID);
      this.getAnim();

  }


  edit(id,title,author,image,date){

    let data = {
      id:id,
      title:title,
      author:author,
      image:image,
      date: date
    };
    this.navCtrl.push(EditPage,data);

  }





}
