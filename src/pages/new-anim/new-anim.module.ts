import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewAnimPage } from './new-anim';

@NgModule({
  declarations: [
    NewAnimPage,
  ],
  imports: [
    IonicPageModule.forChild(NewAnimPage),
  ],
})
export class NewAnimPageModule {}
