import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, JsonpModule } from '@angular/http';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  public pokemon: any;
  public typeBg: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.pokemon = navParams.get('item');
    this.typeBg = './assets/imgs/type_backgrounds/' + this.pokemon.type[0].toLowerCase() + '.png';
  }

  ionViewWillEnter() {
    console.log('typeBg: ', this.typeBg);
  }

}
