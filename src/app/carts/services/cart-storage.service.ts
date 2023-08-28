import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartStorageService {
  constructor(private http: HttpClient) {}

  sendNewCart(model: any) {
    return this.http.post('https://fakestoreapi.com/carts', model);
  }
}
