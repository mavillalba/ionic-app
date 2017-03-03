import {NavController, NavParams} from "ionic-angular";
import {Component} from "@angular/core";
/**
 * Created by meryanyels on 2/03/17.
 */

@Component({
  templateUrl: 'team-home.page.html'
})
export  class TeamHomePage {
  team: any;

  constructor(private nav: NavController, private navParams: NavParams){
    this.team = this.navParams.data;
  }

  goHome(){
    //this.nav.push(MyTeamsPage);
    this.nav.popToRoot();
  }
}
