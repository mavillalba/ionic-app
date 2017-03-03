import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {TeamHomePage} from "../team-home/team-home.page";
import {EliteApi} from "../../shared/elite.api.service";
/**
 * Created by meryanyels on 3/03/17.
 */
@Component({
  templateUrl: 'game.page.html',
})
export class GamePage {
  game: any = {};

  constructor(public nav: NavController,
              public navParams: NavParams,
              public eliteApi: EliteApi) {
  }

  ionViewDidLoad() {
    this.game = this.navParams.data;
  }

  teamTapped(teamId){
    let tourneyData = this.eliteApi.getCurrentTourney();
    let team = tourneyData.teams.find(t => t.id === teamId);
    this.nav.push(TeamHomePage, team);
  }
}
