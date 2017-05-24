import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContenidoPage } from './contenido';

@NgModule({
  declarations: [
    ContenidoPage,
  ],
  imports: [
    IonicPageModule.forChild(ContenidoPage),
  ],
  exports: [
    ContenidoPage
  ]
})
export class ContenidoPageModule {}
