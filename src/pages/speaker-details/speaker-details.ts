import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
@Component({
  selector: 'page-speaker-details',
  templateUrl: 'speaker-details.html'
})

export class SpeakerDetailsPage {
  public speaker: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) { }

  ionViewDidLoad() {
    this.speaker = this.navParams.get('speaker');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
