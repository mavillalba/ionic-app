import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
/**
 * Created by meryanyels on 2/03/17.
 */

@Component({
  templateUrl:'standings.page.html'
})
export class StandingsPage {

  team: any;

  constructor(private nav: NavController, private navParams: NavParams){
    this.team = this.navParams.data;
    console.log('**nav params:', this.navParams);
  }
}
