import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { EtiquetaPage } from '../pages/etiqueta/etiqueta';
import { ContenidoPage } from '../pages/contenido/contenido';
import { ComidaPage } from '../pages/comida/comida';
import { CalimentoPage } from '../pages/calimento/calimento';
import { EfectosPage } from '../pages/efectos/efectos';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Food } from '../providers/food/food';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EtiquetaPage,
    ContenidoPage,
    ComidaPage,
    CalimentoPage,
    EfectosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EtiquetaPage,
    ContenidoPage,
    ComidaPage,
    CalimentoPage,
    EfectosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Food
  ]
})
export class AppModule {}
