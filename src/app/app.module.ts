import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {MyTeamsPage} from "../pages/my-teams/my-teams.page";
import {TournamentsPage} from "../pages/tournaments/tournaments.page";
import {TeamsPage} from "../pages/teams/teams.page";
import {TeamDetailPage} from "../pages/team-detail/team-detail.page";
import {TeamHomePage} from "../pages/team-home/team-home.page";
import {StandingsPage} from "../pages/standings/standings.page";
import {TabsPage} from "../pages/tabs/tabs";
import {HttpModule} from "@angular/http";
import {EliteApi} from "../shared/elite.api.service";

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailPage,
    TeamHomePage,
    StandingsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailPage,
    TeamHomePage,
    StandingsPage,
    TabsPage
  ],
  providers: [EliteApi, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
