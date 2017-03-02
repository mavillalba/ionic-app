/**
 * Created by mavillalba on 2/03/17.
 */
import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {TournamentsPage} from "../tournaments/tournaments.page";

@Component({
  templateUrl: 'my-teams.page.html'
})
export class MyTeamsPage {
  constructor(private nav: NavController){
  }

  goToTournaments(){
    this.nav.push(TournamentsPage);
  }
}
