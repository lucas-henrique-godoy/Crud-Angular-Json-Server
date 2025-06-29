import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({ //Essa classe pode ser injetada em outras classes
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products" //Url da api no backend

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { } //Injetamos snackbar e HttpClient

  //Métod para mostrar uma mensagem usando snackbar
  showMessage(msg: string): void {
    this.snackbar.open(msg,'X', { //o parâmetro action esta com X que serve para fechar o snackbar
      duration: 3000,  //duração de 3 segundos
      horizontalPosition: "right", //posição horizontal a direita
      verticalPosition: "top"  //posição vertical em cima
    })
  }

  //Método para criação de Produto
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }
}
