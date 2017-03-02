import { Component } from '@angular/core';

import {TeamDetailPage} from "../team-detail/team-detail.page";
import {StandingsPage} from "../standings/standings.page";

@Component({
  selector: 'tab-team',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  teamDetailTab: any = TeamDetailPage
  standingsTab: any = StandingsPage;

  constructor() {

  }
}
