import {Component, ViewChild} from '@angular/core';
import {Platform, Nav, Events, LoadingController} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import {MyTeamsPage} from "../pages/my-teams/my-teams.page";
import {TournamentsPage} from "../pages/tournaments/tournaments.page";
import {UserSettings} from "../shared/user-settings.service";
import {TeamHomePage} from "../pages/team-home/team-home.page";
import {EliteApi} from "../shared/elite.api.service";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  favoriteTeams: any[];
  rootPage = MyTeamsPage;

  constructor(platform: Platform,
              private  userSettings: UserSettings,
              public events: Events,
              private loadingController: LoadingController,
              private eliteApi: EliteApi) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.userSettings.initStorage().then(() => {
        this.rootPage = MyTeamsPage;
        this.refreshFavorites();
        this.events.subscribe('favorites:changed', () => this.refreshFavorites());
      });
    });
  }

  refreshFavorites(){
    this.userSettings.getAllFavorites().then(favs => this.favoriteTeams = favs);
    //this.favoriteTeams = this.userSettings.getAllFavorites();
  }

  goHome(){
    this.nav.push(MyTeamsPage);
  }

  goToTeam(favorite){
    let loader = this.loadingController.create({
      content: 'Getting data...',
      dismissOnPageChange: true
    });
    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId).subscribe(l => this.nav.push(TeamHomePage, favorite.team));
  }

  goToTournaments(){
    this.nav.push(TournamentsPage);
  }
}
