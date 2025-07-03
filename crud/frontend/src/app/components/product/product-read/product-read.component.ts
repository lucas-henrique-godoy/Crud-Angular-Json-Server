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

  products:Product[]= [] //Lista de produtos
  displayedColumns = ['id', 'name', 'price'];
  dataSource = new MatTableDataSource<Product>(this.products);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit(): void { //Método que sempre é chamado automaticamente quando o componente é inicializado.
    
    this.productService.read().subscribe(data => {
      this.products = data;
      this.dataSource.data = data;     
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator= this.paginator!;
    this.dataSource.sort = this.sort!;
  }
  
}
