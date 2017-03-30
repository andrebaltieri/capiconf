import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-presentation',
  templateUrl: 'presentation.html'
})
export class PresentationPage {
  public presentation: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) { }

  ionViewDidLoad() {
    this.presentation = this.navParams.get('presentation');
    console.log(this.presentation);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
