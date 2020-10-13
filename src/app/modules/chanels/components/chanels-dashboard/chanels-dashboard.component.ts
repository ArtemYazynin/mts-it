import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ChanelsDataSourceService } from '../../services/chanels-data-source.service';


@Component({
  selector: 'app-chanels-dashboard',
  templateUrl: './chanels-dashboard.component.html',
  styleUrls: ['./chanels-dashboard.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChanelsDashboardComponent implements OnInit {
  chanelsResponse$ = this.chanelsDataSourceService.get$();
  constructor(private chanelsDataSourceService:ChanelsDataSourceService) { 
    
  }

  ngOnInit() {

  }

}
