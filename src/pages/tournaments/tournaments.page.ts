import {NavController} from "ionic-angular";
import {Component} from "@angular/core";
import {MyTeamsPage} from "../my-teams/my-teams.page";
/**
 * Created by mavillalba on 2/03/17.
 */

@Component({
  templateUrl: 'tournaments.page.html'
})
export class TournamentsPage {
  constructor(private navCtrl: NavController){

  }

  navigate(){
    this.navCtrl.push(MyTeamsPage);
  }
}
