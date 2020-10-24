import { Component, OnInit } from '@angular/core';

// Modelo
import { Car } from 'src/app/models/cars';
 
// Servicio
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-cartable',
  templateUrl: './cartable.component.html',
  styleUrls: ['./cartable.component.css']
})
export class CartableComponent implements OnInit {

  // instancia de la interfaz o modelo "Car"
  cars: Car;

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.getCar();
  }

  // Funcion que manda a traer a un Vehiculo
  getCar(){
    this.carsService.getCars().subscribe(
      res => {
        this.cars = res;
        console.log(this.cars)
      },
      err => console.log(err)
    );
  }

  // Funcion que elimina un vehiculo
  deleteCar(id: string){
    this.carsService.deleteCar(id).subscribe(
      res => {
        console.log(res)
        this.getCar();
      },
      err => console.log(err)
    )
  }

  // Funcion que manda el id del vehiculo para luego editarlo
  editCar(id: string){
    console.log(id);
  }

}
