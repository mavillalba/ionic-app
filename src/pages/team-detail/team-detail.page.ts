import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {EliteApi} from "../../shared/elite.api.service";
import * as _ from 'lodash';
import {GamePage} from "../game/game.page";

/**
 * Created by meryanyels on 2/03/17.
 */
@Component({
  templateUrl: 'team-detail.page.html'
})
export class TeamDetailPage{

  team: any;
  games: any[];
  private tourneyData: any;

  constructor(private nav: NavController,
              private navParams: NavParams,
              public eliteApi: EliteApi){
  }

  ionViewDidLoad() {
    this.team = this.navParams.data;
    this.tourneyData = this.eliteApi.getCurrentTourney();
    this.games = _.chain(this.tourneyData.games)
      .filter(g => g.team1Id === this.team.id || g.team2Id === this.team.id)
      .map(g => {
        let isTeam1 = (g.team1Id === this.team.id);
        let opponentName = isTeam1 ? g.team2 : g.team1;
        let scoreDisplay = this.getScoreDisplay(isTeam1, g.team1Score, g.team2Score);
        return {
          gameId: g.id,
          opponent: opponentName,
          time: Date.parse(g.time),
          location: g.location,
          locationUrl: g.locationUrl,
          scoreDisplay: scoreDisplay,
          homeAway: (isTeam1 ? "vs." : "at")
        };
      })
      .value();
  }

  getScoreDisplay(isTeam1, team1Score, team2Score) {
    if (team1Score && team2Score) {
      var teamScore = (isTeam1 ? team1Score : team2Score);
      var opponentScore = (isTeam1 ? team2Score : team1Score);
      var winIndicator = teamScore > opponentScore ? "W: " : "L: ";
      return winIndicator + teamScore + "-" + opponentScore;
    }
    else {
      return "";
    }
  }

  gameClicked($event, game){
    let sourceGame = this.tourneyData.games.find(g => g.id === game.gameId);
    this.nav.parent.parent.push(GamePage, sourceGame);
  }
  //goHome(){
    //this.nav.push(MyTeamsPage);
    //this.nav.popToRoot();
  /*  console.log('**parent', this.nav.parent);
    this.nav.parent.parent.popToRoot();
  }*/
}
