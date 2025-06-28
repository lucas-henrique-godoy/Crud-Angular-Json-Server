import { Injectable } from '@angular/core';

@Injectable({ //Essa classe pode ser injetada em outras classes
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  showOnConsole(msg: string): void {
    console.log(msg)
  }
}
