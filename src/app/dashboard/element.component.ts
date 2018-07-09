import {AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dashboard-element',
  template: `<div #container></div>`
})
export class DashboardElementComponent implements AfterViewInit {

  @ViewChild('container') container: ElementRef;
  @Input() type: string;
  @Input() attributes: {[key: string]: string};

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    const newElement = this.renderer.createElement(this.type);
    for (const key in this.attributes) {
      if (this.attributes[key]) {
        this.renderer.setAttribute(newElement, key, this.attributes[key]);
      }
    }
    this.renderer.appendChild(this.container.nativeElement, newElement);
  }
}
