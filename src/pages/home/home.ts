import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  requestReview() {
    const plugins = (window as any).plugins;

    if (plugins && plugins.InAppRatingsReview) {
      plugins.InAppRatingsReview.requestReview();
    }
  }
}
