import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Food } from '../../providers/food/food';

/**
 * Generated class for the CalimentoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-calimento',
  templateUrl: 'calimento.html',
})
export class CalimentoPage {
  public food;
  constructor(public navCtrl: NavController, public navParams: NavParams, public foodProvider: Food) {
    let foodId = navParams.get("food_id");
    this.food = foodProvider.getFoodFromId(foodId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalimentoPage');
  }

}
