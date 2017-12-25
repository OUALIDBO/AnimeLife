//Core components
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import {AnimApiGlobal} from '../models/animapi-global.model';


@Injectable()
export class AnimApiService {


  constructor(private http: Http) {
      console.log('Hello anim api service');
  }


  getAnimService(): any {
    return this.http.get('https://kidsprofiler.esiea.fr/api/anime')
    .toPromise()
    .then(response => response.json() as AnimApiGlobal)
    .catch(error => console.log('error hapened with the get ' + error))

   }


   deleteAnimService(id): any {
     var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
     headers.append('Access-Control-Allow-Origin', '*' );


     let options = new RequestOptions({ headers: headers });

      let data ={
        id:id
      }

      this.http.delete('https://kidsprofiler.esiea.fr/api/delete_anime/id=' + data.id,options)
      .subscribe(this.getAnimService());

   }


   addAnimService(title,author,image,date): any {
     var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
     headers.append('Access-Control-Allow-Origin', '*' );
     
     let options = new RequestOptions({ headers: headers });

     let data = {
       title:title,
       author:author,
       image:image,
       date: date
     };
     console.log('add begin');
      this.http.put('https://kidsprofiler.esiea.fr/api/add_anime',data,options)
      .subscribe(this.getAnimService());
      console.log('add finished');


   }


   EditAnimService(id,title,author,image,date){
     var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
     let options = new RequestOptions({ headers: headers });


     let data = {
       id:id,
       title:title,
       author:author,
       image:image,
       date: date
     };

     let dataTosend= {
       title:title,
       author:author,
       image:image,
       date: date
     };

     console.log('edit service data',data.id);
     console.log('edit begin');
      this.http.put('https://kidsprofiler.esiea.fr/api/edit_anime/id=' + data.id,dataTosend,options)
      .subscribe(this.getAnimService());
      console.log('edit finished');
   }


}
