import {NavController} from "ionic-angular";
import {Component} from "@angular/core";
import {TeamsPage} from "../teams/teams.page";
/**
 * Created by mavillalba on 2/03/17.
 */

@Component({
  templateUrl: 'tournaments.page.html'
})
export class TournamentsPage {
  constructor(private nav: NavController){

  }

  itemTapped(){
    this.nav.push(TeamsPage);
  }
}
