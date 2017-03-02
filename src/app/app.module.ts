import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {MyTeamsPage} from "../pages/my-teams/my-teams.page";
import {TournamentsPage} from "../pages/tournaments/tournaments.page";
import {TeamsPage} from "../pages/teams/teams.page";
import {TeamDetailPage} from "../pages/team-detail/team-detail.page";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
