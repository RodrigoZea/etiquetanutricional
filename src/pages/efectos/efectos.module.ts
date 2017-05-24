import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EfectosPage } from './efectos';

@NgModule({
  declarations: [
    EfectosPage,
  ],
  imports: [
    IonicPageModule.forChild(EfectosPage),
  ],
  exports: [
    EfectosPage
  ]
})
export class EfectosPageModule {}
