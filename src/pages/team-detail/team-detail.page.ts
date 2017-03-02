import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
/**
 * Created by meryanyels on 2/03/17.
 */
@Component({
  templateUrl: 'team-detail.page.html'
})
export class TeamDetailPage{

  team: any;

  constructor(private nav: NavController, private navParams: NavParams){
    this.team = this.navParams.data;
    console.log('**nav params:', this.navParams);
  }
}
