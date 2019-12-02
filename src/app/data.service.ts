import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = "http://172.18.5.233:7000/product"

  constructor(private http:HttpClient) { }

  getProducts() {
    return this.http.get(this.url);
  }
}
