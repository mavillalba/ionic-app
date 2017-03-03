import {NavController, NavParams, LoadingController} from "ionic-angular";
import {Component} from "@angular/core";
import {TeamHomePage} from "../team-home/team-home.page";
import {EliteApi} from "../../shared/elite.api.service";
import * as _ from 'lodash';

/**
 * Created by meryanyels on 2/03/17.
 */

@Component({
templateUrl: 'teams.page.html'
})
export class TeamsPage {
  private allTeams: any;
  private allTeamDivisions: any;
  teams = [];

  constructor(private nav: NavController,
              private navParams: NavParams,
              private eliteApi: EliteApi,
              private loadingController: LoadingController){

  }

  ionViewDidLoad() {
    let selectedTourney = this.navParams.data;

    let loader = this.loadingController.create({
      content: 'Getting data...'
    });

    loader.present().then(() => {
      this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data => {
        this.allTeams = data.teams;
        this.allTeamDivisions = _.chain(data.teams)
          .groupBy('division')
          .toPairs()
          .map(item => _.zipObject(['divisionName', 'divisionTeams'], item))
          .value();

        this.teams = this.allTeamDivisions;
        console.log('division teams', this.teams);
        loader.dismiss();
      });
    });

  }

  itemTapped($event, team){
    this.nav.push(TeamHomePage, team);
  }
}
