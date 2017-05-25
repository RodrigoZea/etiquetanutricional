import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Food } from '../../providers/food/food';
/**
 * Generated class for the EfectosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-efectos',
  templateUrl: 'efectos.html',
  providers: [ Food ]
})
export class EfectosPage {
  public food;
  public chartOptions;
  public chartLabels;
  public chartType;
  public chartLegend;
  public chartData;
  constructor(public navCtrl: NavController, public navParams: NavParams, public foodProvider: Food) {
    let foodId = navParams.get("food_id");
    this.food = foodProvider.getFoodFromId(foodId);
    this.chartOptions = this.food.chart.options;
    this.chartLabels = this.food.chart.label;
    console.log(this.food.chart.data);
    this.chartData = this.food.chart.data;
    this.chartType = this.food.chart.type;
    this.chartLegend = this.food.chart.legend;
  }
  /*chartOptions: any = {
      scaleShowVerticalLines: false,
      responsive: true
    };

    chartLabels: string[] = ['Test 1', 'Test 2', 'Test 3', 'Test 4'];
    chartType: string = 'bar';
    chartLegend: boolean = true;

    chartData: any[] = [
      { data: [75, 80, 45, 100], label: 'Student A' },
      { data: [80, 55, 75, 95], label: 'Student B' }
    ];*/


  ionViewDidLoad() {
    console.log('ionViewDidLoad EfectosPage');
  }

}
