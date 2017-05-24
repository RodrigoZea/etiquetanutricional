import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the FoodProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Food {

  public alimentos: {id: number, nombre: string, desc:string, img: string, etiqueta: string}[];
  constructor() {
    console.log("hello FoodProvider")
    this.alimentos = [
      {
        id: 1,
        nombre: "Avena",
        desc: "Ejemplo",
        img:"imas/avena.jpg",
        etiqueta: "imas/e1.png",

      },
      {
        id: 2,
        nombre: "Coca-Cola",
        desc: "Bebida gaseosa con contenidos de cafeína",
        img:"imas/coca.png",
        etiqueta: "",

      },
      {
        id: 3,
        nombre: "Galletas Chokis",
        desc: "Merienda con contenidos de",
        img:"imas/chokis.jpg",
        etiqueta: "imas/e3.jpg",
        }];
  }

  getAllFood() {
    return this.alimentos;
  }

  getFoodFromId(aId) {
    return this.alimentos.filter(alimento => alimento.id == aId)[0];
  }

}
