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

  constructor(private http: Http){

  }

  getTournaments(){
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/tournaments.json`)
        .subscribe(res => resolve(res.json()));
    });
  }

  getTournamentData(tourneyId) : Observable<any> {
    return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
      .map(response => {
        this.currentTourney = response.json();
        return this.currentTourney;
      });
  }
}
