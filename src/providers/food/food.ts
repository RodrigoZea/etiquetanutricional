import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the FoodProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Food {

  public alimentos: {id: number, nombre: string, desc:string, img: string, efectosd: string, cimg: string, etiqueta: string, fcolor: string, contenido: string, chart: any}[];
  constructor() {
    console.log("hello FoodProvider")
    this.alimentos = [
      {
        id: 1,
        nombre: "Avena",
        desc: "Una buena fuente de proteínas con muchos beneficios nutritivos.",
        img:"imas/avena.jpg",
        efectosd:"Buena. Los beneficios que presenta el alimento son mayores que sus consecuencias de un consumo extremo; puede padecer de enfermedades del corazón pero no de enfermedades referentes a azúcares.",
        cimg:"",
        etiqueta: "imas/e1.png",
        fcolor: "",
        contenido: "Este alimento contiene una cantidad baja en grasas y colesterol, por lo que si sigue consumiendo este producto, no le causará ningún daño grave. Además fortalecerá su crecimiento.",
        chart: {
          label:  ['Efectos Negativos', 'Efectos Positivos'],
          type: "doughnut",
          legend: true,
          options: {
              scaleShowVerticalLines: false,
              responsive: true
            },
          data: [
            { data: [11, 89], label: 'Efectos Avena' }//,
            //{ data: [80, 55, 75, 95], label: 'Student B' }
          ]
        }
      },
      {
        id: 2,
        nombre: "Coca-Cola",
        desc: "Bebida gaseosa con contenidos de cafeína.",
        img:"imas/coca.png",
        efectosd:"Regular. La bebida puede debilitar sus huesos y le puede causar diabetes, otros problemas de circulación si sigue consumiendo este producto. Sin embargo, lo mantiene activo a través de un día largo y cansado por un tiempo, debido a que el valor energético es bajo.",
        cimg:"",
        etiqueta: "",
        fcolor: "#ffff00",
        contenido: "Contiene azúcares en exceso y cafeína, causante de las enfermedades descritas en los efectos como diabetes. ",
        chart: {
          label:  ['Efectos Negativos', 'Efectos Positivos'],
          type: "doughnut",
          legend: true,
          options: {
              scaleShowVerticalLines: false,
              responsive: true
            },
          data: [
            { data: [50, 50], label: 'Efectos Coca-Cola' }
          ]
        }
      },
      {
        id: 3,
        nombre: "Galletas Chokis",
        desc: "Merienda con sabor natural y buenos contenidos protéicos.",
        img:"imas/chokis.jpg",
        efectosd:"Buena. El producto le provee sabores naturales de chispas de chocolate y fomenta el desarrollo en los niños. Su consumo extremo le puede causar obesidad por su alto contenido calórico.",
        cimg:"",
        etiqueta: "imas/e3.jpg",
        fcolor: "",
        contenido: "Contiene altos contenidos de grasas, lo que le puede causar efectos negativos, sin embargo posee un buen contenido de proteínas lo cual le proveerá energías para el día.",
        chart: {
          label:  ['Efectos Negativos', 'Efectos Positivos'],
          type: "doughnut",
          legend: true,
          options: {
              scaleShowVerticalLines: false,
              responsive: true
            },
          data: [
            { data: [25, 75], label: 'Efectos Galletas' }
          ]
        }
        }];
  }

  getAllFood() {
    return this.alimentos;
  }

  getFoodFromId(aId) {
    return this.alimentos.filter(alimento => alimento.id == aId)[0];
  }

}
