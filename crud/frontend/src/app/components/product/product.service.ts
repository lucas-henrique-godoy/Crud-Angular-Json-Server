import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Product } from './product.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({ //Essa classe pode ser injetada em outras classes
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products" //Url da api no backend

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { } //Injetamos snackbar e HttpClient

  //Método para mostrar uma mensagem usando snackbar
  showMessage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg,'X', { //o parâmetro action esta com X que serve para fechar o snackbar
      duration: 3000,  //duração de 3 segundos
      horizontalPosition: "right", //posição horizontal a direita
      verticalPosition: "top",  //posição vertical em cima
      panelClass: isError ? ['msg-error']: ['msg-success'] //Usando a classe para mensagens de sucesso
    })
  }

  //Método para criação de Produto
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any):  Observable<any> {
    console.log(e);
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
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
