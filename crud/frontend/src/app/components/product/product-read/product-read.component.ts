import { MatPaginator } from '@angular/material/paginator';
import { Product } from '../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  product: Product = {
    name: '',
    price: null
  };

  products:Product[]= [] //Lista de produtos 

  constructor(private productService: ProductService) { }

  ngOnInit(): void { //Método que sempre é chamado automaticamente quando o componente é inicializado.
    this.productService.read().subscribe(products => {
    this.products = products;          
    })
  }  
}
