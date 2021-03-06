import {NavController, LoadingController} from "ionic-angular";
import {Component} from "@angular/core";
import {TeamsPage} from "../teams/teams.page";
import {EliteApi} from "../../shared/elite.api.service";
/**
 * Created by mavillalba on 2/03/17.
 */

@Component({
  templateUrl: 'tournaments.page.html'
})
export class TournamentsPage {

  tournaments: any;

  constructor(private nav: NavController,
              private eliteApi: EliteApi,
              private loadingController: LoadingController){

  }

  itemTapped($event, tourney){
    this.nav.push(TeamsPage, tourney);
  }

  ionViewDidLoad(){
    let loader = this.loadingController.create({
      content: 'Getting tournaments...'
      //spinner: 'dots'
    });

    loader.present().then(() => {
      this.eliteApi.getTournaments().then(data => {
        this.tournaments = data;
        loader.dismiss();
      });
    });
    //this.eliteApi.getTournaments().then(data => this.tournaments = data);
  }
}
