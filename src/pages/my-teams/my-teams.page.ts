/**
 * Created by mavillalba on 2/03/17.
 */
import {Component} from "@angular/core";
import {NavController, LoadingController} from "ionic-angular";
import {TournamentsPage} from "../tournaments/tournaments.page";
import {EliteApi} from "../../shared/elite.api.service";
import {TeamHomePage} from "../team-home/team-home.page";
import {UserSettings} from "../../shared/user-settings.service";

@Component({
  templateUrl: 'my-teams.page.html'
})
export class MyTeamsPage {
  favorites = [];

  constructor(private nav: NavController,
              private loadingController: LoadingController,
              private eliteApi: EliteApi,
              private userSettings: UserSettings){
  }

  favoriteTapped($event, favorite){
    let loader = this.loadingController.create({
      content: 'Getting data...',
      dismissOnPageChange: true
    });
    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId)
      .subscribe(t => this.nav.push(TeamHomePage, favorite.team));
  }

  goToTournaments(){
    this.nav.push(TournamentsPage);
  }

  ionViewDidEnter(){
    this.userSettings.getAllFavorites().then(favs => this.favorites = favs);
  }
}
