import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {EliteApi} from "../../shared/elite.api.service";
import * as _ from 'lodash';
/**
 * Created by meryanyels on 2/03/17.
 */

@Component({
  templateUrl:'standings.page.html'
})
export class StandingsPage {
  allStandings: any[];
  divisionFilter = 'division';
  standings: any[];
  team: any;

  constructor(private nav: NavController,
              private navParams: NavParams,
              private eliteApi: EliteApi){
    this.team = this.navParams.data;
    console.log('**nav params:', this.navParams);
  }

  ionViewDidLoad(){
    //this.team = this.navParams.data;
    let tourneyData = this.eliteApi.getCurrentTourney();
    this.standings = tourneyData.standings;

    /*this.allStandings = _.chain(this.standings)
      .groupBy('division')
      .toPairs()
      .map(item => _.zipObject(['divisionName', 'divisionStandings'], item))
      .value();*/

    console.log('standings', this.standings);
    //console.log('division Standings', this.allStandings);
    this.allStandings = tourneyData.standings;

    this.filterDivision();
  }

  filterDivision(){
    if(this.divisionFilter === 'all'){
      this.standings = this.allStandings;
    } else {
      this.standings = _.filter(this.allStandings, s => s.division === this.team.division);
    }
  }

  getHeader(record, recordIndex, records){
    if (recordIndex === 0 || record.division !== records[recordIndex-1].division) {
      return record.division;
    }
    return null;
  }
}
