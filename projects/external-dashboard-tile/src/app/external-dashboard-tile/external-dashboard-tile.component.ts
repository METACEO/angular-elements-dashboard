import {AfterViewInit, Component, Input} from '@angular/core';

import {ClientService} from 'client';

export interface ExampleData {
  key: string;
  value: number;
}

@Component({
  templateUrl: './external-dashboard-tile.component.html',
  styleUrls: ['./external-dashboard-tile.component.css']
})
export class ExternalDashboardTileComponent implements AfterViewInit {

  @Input() a: number;
  @Input() b: number;
  @Input() c: number;

  constructor(private clientService: ClientService) {
    console.log(this.clientService);
  }

  displayedColumns: string[] = ['key', 'value'];
  dataSource: ExampleData[] = [];

  ngAfterViewInit() {
    this.dataSource = [
      {key: 'A', value: this.a},
      {key: 'B', value: this.b},
      {key: 'C', value: this.c},
    ];
  }

}


