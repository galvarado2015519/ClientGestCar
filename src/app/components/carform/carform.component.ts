import { Component, HostBinding, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//Importacion de modelo
import { Car } from 'src/app/models/cars';

// Importacion de servicio
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-carform',
  templateUrl: './carform.component.html',
  styleUrls: ['./carform.component.css']
})
export class CarformComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  // Inisalizacion de propiedades vacias
    car: Car ={
      id: 0,
      brand: '',
      model: '',
      year: 0,
      licensePlate: '',
      state:''
    };

  // Validacion para poder editar con el mismo formulario que el de guardar
  edit : boolean = false; 
  
  constructor(private carsService: CarsService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activateRoute.snapshot.params;
    if(params.id){
      this.carsService.getCar(params.id).subscribe(
        res => {
          console.log(res);
          this.car = res;
          this.edit = true;
        },
        err => console.log(err)
      );
    }
  }

  // Funcion guardar Vehiculo
  saveCar(){
    delete this.car.id;
    if(this.car.brand != '' && this.car.model != '' && this.car.licensePlate.length >=1 && this.car.licensePlate.length <=8 && this.car.licensePlate != '' && this.car.state != ''){
      this.carsService.saveCar(this.car).subscribe((res:any)=>{
        if(res.message){
          this.router.navigateByUrl("cartable");
        }else if(res.err){
          alert(res.err);
        }else{
          alert('Ingrese todos los parametros');
        }
      });
    }else{
      alert("No deje campos Vacios, ingrese todos los parametros");
    }
  }

  //Funcion Actualizar vehiculo
  updateCar(){
    this.carsService.updateCar(this.car.id, this.car).subscribe(
      res =>{
        console.log(res);
        this.router.navigateByUrl('cartable');
      },
      err => console.log(err)
    );
  }

}
