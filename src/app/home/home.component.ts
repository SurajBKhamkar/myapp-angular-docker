import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any;

  constructor(private service:DataService) { }

  ngOnInit() {
    this.service
      .getProducts()
      .subscribe((result)=>{
        this.products = result;
      })
  }
}
