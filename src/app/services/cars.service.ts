import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Car } from '../models/cars';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  //Variable para instanciar la URI
  URI = 'http://localhost:3000';

  constructor( private http: HttpClient) { }

  // PETICIONES AL API REST DEL CRUD PARA VEHICULOS
  getCars(){
    return this.http.get(`${this.URI}/cars`);
  }

  getCar(id: string){
    return this.http.get(`${this.URI}/cars/${id}`);
  }

  deleteCar(id: string){
    return this.http.delete(`${this.URI}/cars/${id}`);
  }

  saveCar(car: Car){
    return this.http.post(`${this.URI}/cars`, car);
  }

  updateCar(id: string|number, updateCar: Car): Observable<Car>{
    return this.http.put(`${this.URI}/cars/${id}`, updateCar);
  }


}
