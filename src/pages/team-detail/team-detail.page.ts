import {Component} from "@angular/core";
import {AlertController, NavController, NavParams, ToastController} from "ionic-angular";
import {EliteApi} from "../../shared/elite.api.service";
import * as _ from 'lodash';
import * as moment from 'moment';
import {GamePage} from "../game/game.page";

/**
 * Created by meryanyels on 2/03/17.
 */
@Component({
  templateUrl: 'team-detail.page.html'
})
export class TeamDetailPage{
  allGames: any[];
  dateFilter: string;
  team: any;
  games: any[];
  isFollowing = false;
  teamStanding: any;
  private tourneyData: any;
  useDateFilter = false;

  constructor(private alertController: AlertController,
              private nav: NavController,
              private navParams: NavParams,
              private toastController: ToastController,
              public eliteApi: EliteApi){
    this.team = this.navParams.data;
    this.tourneyData = this.eliteApi.getCurrentTourney();
    this.teamStanding = _.find(this.tourneyData.standings, {'teamId': this.team.id});
    console.log('**nav params:', this.navParams)
    console.log('**tourneyData:', this.tourneyData);
    console.log('**teamStanding:', this.teamStanding);
  }


  ionViewDidLoad() {
    //this.team = this.navParams.data;
    //this.tourneyData = this.eliteApi.getCurrentTourney();
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
    this.allGames = this.games;
    //this.teamStanding = _.find(this.tourneyData.standings, {'teamId': this.team.id});
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

  dateChanged(){
    if(this.useDateFilter) {
      this.games = _.filter(this.allGames, g => moment(g.time).isSame(this.dateFilter, 'day'));
    }else {
      this.games = this.allGames;
    }
  }

  getScoreWorL(game){
    return game.scoreDisplay ? game.scoreDisplay[0] : '';
  }

  getScoreDisplayBadgeClass(game){
    return game.scoreDisplay.indexOf('W:') === 0 ? 'primary' : 'danger';
  }

  toggleFollow(){
    if(this.isFollowing){
      let confirm = this.alertController.create(
        {
          title: 'Unfollow?',
          message: 'Are you sure you want to unfollow?',
          buttons: [
            {
              text: 'yes',
              handler: () => {
                this.isFollowing = false;
                //TODO: persist data

                let toast = this.toastController.create({
                  message: 'You have unfollowed this team.',
                  duration: 2000,
                  position: 'bottom'
                });
                toast.present();
              }
            },
            {text: 'No'}
          ]
        });
      confirm.present();
    }else {
      this.isFollowing = true;
      //TODO: persist data
    }
  }
}
