import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  //Pegando o titulo
  get title(): string {
    return this.headerService.headerData.title;
  }

    //Pegando o icone
   get icon(): string {
    return this.headerService.headerData.icon;
  }

  //Pegando a rota
   get routeUrl(): string {
    return this.headerService.headerData.routeUrl;
  }
}
