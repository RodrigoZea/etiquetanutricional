import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EtiquetaPage } from './etiqueta';

@NgModule({
  declarations: [
    EtiquetaPage,
  ],
  imports: [
    IonicPageModule.forChild(EtiquetaPage),
  ],
  exports: [
    EtiquetaPage
  ]
})
export class EtiquetaPageModule {}
