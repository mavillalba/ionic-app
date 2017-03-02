import {Component, ViewChild} from '@angular/core';
import {Platform, NavController} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import {MyTeamsPage} from "../pages/my-teams/my-teams.page";
import {TournamentsPage} from "../pages/tournaments/tournaments.page";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(NavController) nav: NavController
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  goHome(){
    this.nav.push(MyTeamsPage);
  }

  goToTournaments(){
    this.nav.push(TournamentsPage);
  }
}
