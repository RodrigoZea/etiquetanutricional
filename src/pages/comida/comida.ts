import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';
import { Food } from '../../providers/food/food';

/**
 * Generated class for the ComidaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-comida',
  templateUrl: 'comida.html',
  providers: [ Food ]
})
export class ComidaPage {

  public alimentos: {nombre: string, desc:string, img: string}[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public foodProvider: Food) {
    this.alimentos = foodProvider.getAllFood();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComidaPage');
  }

  foodView(id) {
    this.navCtrl.setRoot(HomePage, {'food_id' : id});
    // this.navCtrl.push(TabsPage, {})
  }

}
