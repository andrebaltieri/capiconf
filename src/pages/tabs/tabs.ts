import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AgendaPage } from '../agenda/agenda';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  homeTab: any = HomePage;
  agendaTab: any = AgendaPage;
  infoTab: any = InfoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
  }

}
