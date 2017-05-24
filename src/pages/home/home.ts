import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EtiquetaPage } from '../etiqueta/etiqueta';
import { ContenidoPage } from '../contenido/contenido';
import { Food } from '../../providers/food/food';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public food: {id: number, nombre: string, desc:string, img: string, etiqueta: string};
  constructor(public navCtrl: NavController, public navParams: NavParams, public foodProvider: Food) {
      let foodId = navParams.get("food_id");
      this.food = foodProvider.getFoodFromId(foodId);
  }

  verEtiqueta() {
    //this.navCtrl.push(EtiquetaPage);
    this.navCtrl.push(EtiquetaPage, {"food_id": this.food.id});
  }

  verContenido(){
    //this.navCtrl.push(EtiquetaPage);
    this.navCtrl.push(ContenidoPage, {"food_id": this.food.id});
  }

}
