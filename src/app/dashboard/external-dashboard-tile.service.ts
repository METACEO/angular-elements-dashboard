import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalDashboardTileService {

  constructor() {
  }

  loaded = false;

  load(): void {
    if (this.loaded) {
      return;
    }
    this.loaded = true;

    const script = document.createElement('script');
    script.src = 'assets/webcomponents/external-dashboard-tile.bundle.js';
    document.body.appendChild(script);
  }

}
