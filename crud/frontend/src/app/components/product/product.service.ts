import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Injectable({ //Essa classe pode ser injetada em outras classes
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products" //Url da api no backend

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { } //Injetamos snackbar e HttpClient

  //Método para mostrar uma mensagem usando snackbar
  showMessage(msg: string): void {
    this.snackbar.open(msg,'X', { //o parâmetro action esta com X que serve para fechar o snackbar
      duration: 3000,  //duração de 3 segundos
      horizontalPosition: "right", //posição horizontal a direita
      verticalPosition: "top"  //posição vertical em cima
    })
  }

  //Método para criação de Produto
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  //Método para leitura  dos produtos
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }

  //Método para ler por id
  readyById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  //Método para atualizar um produto
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product);
  }

  //Método para deletar um produto
  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url);
  }
}
