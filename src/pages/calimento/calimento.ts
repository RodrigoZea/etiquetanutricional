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
  providers: [ Food ]
})
export class CalimentoPage {
  /*public food;
  constructor(public navCtrl: NavController, public navParams: NavParams, public foodProvider: Food) {
    let foodId = navParams.get("food_id");
    this.food = foodProvider.getFoodFromId(foodId);
  }*/

  public food;
  public chartOptions;
  public chartLabels;
  public chartType;
  public chartLegend;
  public chartData;
  constructor(public navCtrl: NavController, public navParams: NavParams, public foodProvider: Food) {
    let foodId = navParams.get("food_id");
    this.food = foodProvider.getFoodFromId(foodId);
    this.chartOptions = this.food.chart2.options;
    this.chartLabels = this.food.chart2.label;
    console.log(this.food.chart2.data);
    this.chartData = this.food.chart2.data;
    this.chartType = this.food.chart2.type;
    this.chartLegend = this.food.chart2.legend;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalimentoPage');
  }

}
