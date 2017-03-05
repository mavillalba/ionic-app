import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs';
/**
 * Created by meryanyels on 2/03/17.
 */

@Injectable()
export class EliteApi {

  private baseUrl = 'https://elite-schedule-app-i2-3c553.firebaseio.com/';
  currentTourney: any = {};
  private tourneyData = {};

  constructor(private http: Http){

  }

  getTournaments(){
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/tournaments.json`)
        .subscribe(res => resolve(res.json()));
    });
  }

  getTournamentData(tourneyId, forceRefresh: boolean = false) : Observable<any> {
    if (!forceRefresh && this.tourneyData[tourneyId]) {
      this.currentTourney = this.tourneyData[tourneyId];
      console.log('**no need to make HTTP call, just return the data');
      return Observable.of(this.currentTourney);
    }

    // don't have data yet
    console.log('**about to make HTTP call');
    return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
      .map(response => {
        this.tourneyData[tourneyId] = response.json();
        this.currentTourney = this.tourneyData[tourneyId];
        return this.currentTourney;
      });
  }

  getCurrentTourney(){
    return this.currentTourney;
  }

  refreshCurrentTourney(){
    return this.getTournamentData(this.currentTourney.tournament.id, true);
  }
}
