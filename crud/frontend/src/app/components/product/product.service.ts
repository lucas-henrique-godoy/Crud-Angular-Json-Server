import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';

@Injectable({ //Essa classe pode ser injetada em outras classes
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackbar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackbar.open(msg,'X', { //o parâmetro action esta com X que serve para fechar o snackbar
      duration: 3000,  //duração de 3 segundos
      horizontalPosition: "right", //posição horizontal a direita
      verticalPosition: "top"  //posição vertical em cima
    })
  }
}
