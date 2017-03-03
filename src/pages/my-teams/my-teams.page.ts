/**
 * Created by mavillalba on 2/03/17.
 */
import {Component} from "@angular/core";
import {NavController, LoadingController} from "ionic-angular";
import {TournamentsPage} from "../tournaments/tournaments.page";
import {EliteApi} from "../../shared/elite.api.service";
import {TeamHomePage} from "../team-home/team-home.page";

@Component({
  templateUrl: 'my-teams.page.html'
})
export class MyTeamsPage {
  favorites = [
    {
      team: {id: 12083, name: 'HC Elite 7th', coach: 'Michelotti'},
      tournamentId: '89e13aa2-ba6d-4f55-9cc2-61eba6172c63',
      tournamentName: 'March Madness Tournament'
    },
    {
      team: {id: 7975, name: 'HC Elite', coach: 'Michelotti'},
      tournamentId: '98c6857e-b0d1-4295-b89e-2d95a45437f2',
      tournamentName: 'Holiday Hoops Challenge'
    }
  ];

  constructor(private nav: NavController,
              private loadingController: LoadingController,
              private eliteApi: EliteApi){
  }

  favoriteTapped($event, favorite){
    let loader = this.loadingController.create({
      content: 'Getting data...'
    });
    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId)
      .subscribe(t => this.nav.push(TeamHomePage, favorite.team));
  }

  goToTournaments(){
    this.nav.push(TournamentsPage);
  }
}
