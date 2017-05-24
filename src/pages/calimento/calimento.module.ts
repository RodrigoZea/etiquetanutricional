import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalimentoPage } from './calimento';

@NgModule({
  declarations: [
    CalimentoPage,
  ],
  imports: [
    IonicPageModule.forChild(CalimentoPage),
  ],
  exports: [
    CalimentoPage
  ]
})
export class CalimentoPageModule {}
