import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  

  products:Product[]; //Lista de produtos 
  displayedColumns= ['id', 'name', 'price', 'action']; //Colunas da tabela
  
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void { //Método que sempre é chamado automaticamente quando o componente é inicializado.
    this.productService.read().subscribe(products => {
      this.products = products;          
    })
  }  
  
}


  

