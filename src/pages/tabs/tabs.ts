import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ComidaPage } from '../comida/comida';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ComidaPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
