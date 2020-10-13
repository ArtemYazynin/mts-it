import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ChanelsResponse } from '../../models/chanel.model';
@Component({
  selector: 'app-chanels',
  templateUrl: './chanels.component.html',
  styleUrls: ['./chanels.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChanelsComponent implements OnInit {
  @Input() chanelsResponse: ChanelsResponse;
  batchSize: number; 
  constructor() { 
    this.batchSize = 24
  }

  ngOnInit() {
    console.log(this.chanelsResponse);
  }

  trackByFunction(index, item) {
    if (!item) { return undefined; }
    return index;
  }

  loadMore(){
    this.batchSize += 12;
  }
}
