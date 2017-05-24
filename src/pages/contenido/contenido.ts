import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CalimentoPage } from '../calimento/calimento';
import { EfectosPage } from '../efectos/efectos';

/**
 * Generated class for the ContenidoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contenido',
  templateUrl: 'contenido.html',
})
export class ContenidoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContenidoPage');
  }

verEfectos(){
  this.navCtrl.push(EfectosPage);
}

verCalimento(){
  this.navCtrl.push(CalimentoPage);
}

}
