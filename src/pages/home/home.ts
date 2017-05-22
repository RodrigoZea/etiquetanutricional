import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EtiquetaPage } from '../etiqueta/etiqueta';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  verEtiqueta() {
    //this.navCtrl.push(EtiquetaPage);
    this.navCtrl.setRoot(EtiquetaPage);
  }

}
