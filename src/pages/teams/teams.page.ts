import {NavController} from "ionic-angular";
import {Component} from "@angular/core";
import {TeamHomePage} from "../team-home/team-home.page";
/**
 * Created by meryanyels on 2/03/17.
 */

@Component({
templateUrl: 'teams.page.html'
})
export class TeamsPage {

  teams = [
{ id: 1, name: 'HC Elite'},
{ id: 2, name: 'Team Takeover'},
{ id: 3, name: 'DC Thunder'}
  ];

  constructor(private nav: NavController){

  }

  itemTapped($event, team){
    this.nav.push(TeamHomePage, team);
  }
}
