import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { ChanelsDashboardComponent } from './components/chanels-dashboard/chanels-dashboard.component';
import { ChanelsDataSourceService } from './services/chanels-data-source.service';
import { ChanelsComponent } from './components/chanels/chanels.component';
import { TileDirective } from './directives/tile.directive';
import { MatIconModule } from '@angular/material';
const materialModules = [
  MatTabsModule,
  MatIconModule
];
@NgModule({
    declarations: [
        ChanelsDashboardComponent,
        ChanelsComponent,
        TileDirective
    ],
    exports:[
        ChanelsDashboardComponent,
        TileDirective
    ],
    imports: [
      CommonModule,
      HttpClientModule,
      ...materialModules
    ],
    providers: [
      ChanelsDataSourceService
    ]
  })
  export class ChanelsModule { }