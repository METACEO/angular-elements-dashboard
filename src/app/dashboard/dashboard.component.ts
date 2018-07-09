import {DOCUMENT} from '@angular/common';
import {Component, Inject, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {GridsterConfig} from 'angular-gridster2';

import {IElementInterface} from './IElement.interface';
import {ExternalDashboardTileService} from './external-dashboard-tile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy, OnInit {

  elements: IElementInterface[] = [];
  options: GridsterConfig = {};

  constructor(@Inject(DOCUMENT) private document: HTMLDocument,
              private externalService: ExternalDashboardTileService,
              private renderer: Renderer2) {
    this.options = {
      itemChangeCallback: (item) => console.log('itemChangeCallback', item),
      minCols: 12,
      maxCols: 12,
      minRows: 4,
      draggable: {
        enabled: true,
        ignoreContent: true,
      },
      displayGrid: 'onDrag&Resize',
      gridType: 'scrollVertical',
      fixedColWidth: 80,
      fixedRowHeight: 80,
      pushItems: true,
      resizable: {
        enabled: false,
      },
    };
  }

  getData(): [number, number, number] {
    return [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];
  }

  ngOnDestroy() {
    this.renderer.removeClass(this.document.body, 'is-dashboard');
  }

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'is-dashboard');
  }

  addExternal(): void {
    this.externalService.load();
    this.add('external-dashboard-tile');
  }

  add(tileKind: string): void {

    const data = this.getData();

    this.elements.push({
      attributes: {
        a: data[0],
        b: data[1],
        c: data[2],
      },
      height: 4,
      type: tileKind,
      width: 4,
      x: 0,
      y: 0,
    });
    this.options.api.resize();

  }

  makeItem(element: IElementInterface) {
    return {
      cols: element.width,
      rows: element.height,
      y: element.y,
      x: element.x,
      minItemCols: element.width,
      minItemRows: element.height,
      id: element.id
    };
  }

}
