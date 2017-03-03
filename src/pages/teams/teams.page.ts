import {NavController, NavParams} from "ionic-angular";
import {Component} from "@angular/core";
import {TeamHomePage} from "../team-home/team-home.page";
import {EliteApi} from "../../shared/elite.api.service";
/**
 * Created by meryanyels on 2/03/17.
 */

@Component({
templateUrl: 'teams.page.html'
})
export class TeamsPage {
  teams = [];
  /*teams = [
{ id: 1, name: 'HC Elite'},
{ id: 2, name: 'Team Takeover'},
{ id: 3, name: 'DC Thunder'}
  ];*/

  constructor(private nav: NavController,
              private navParams: NavParams,
              private eliteApi: EliteApi){

  }

  ionViewDidLoad() {
    let selectedTourney = this.navParams.data;

    this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data => {
      this.teams = data.teams;
    });
  }

  itemTapped($event, team){
    this.nav.push(TeamHomePage, team);
  }
}
