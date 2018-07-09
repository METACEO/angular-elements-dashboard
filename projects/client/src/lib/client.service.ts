import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() {
    console.log('ClientService', new Date);
  }
}
