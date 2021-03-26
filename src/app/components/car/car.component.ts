import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';
import { CarDetailComponent } from '../car-detail/car-detail.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];

  dataLoaded = false;
  imageBasePath = environment.baseUrl;
  


  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      } else if (params['brandId'] && params['colorId']) {
        this.getCarsBySelect(params['brandId'], params['colorId']);
      } else if (params ['carId']) {
        this.getCarDetail(params['carId']);
      } else {
        this.getCars();
      }
    });
  }
  setCurrentCars(carId:number){
    this.getCarDetail(carId);
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarDetail(carId:number) {
    this.carService.getCarDetail(carId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsBySelect(brandId: number, colorId: number) {
    this.carService.getCarsBySelect(brandId, colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

}
// import { Component, OnInit } from '@angular/core';
// import { Car } from 'src/app/models/car';
// import { CarService } from 'src/app/services/car.service';

// @Component({
//   selector: 'app-car',
//   templateUrl: './car.component.html',
//   styleUrls: ['./car.component.css']
// })
// export class CarComponent implements OnInit {

//   cars:Car[]=[];
//   dataLoaded=false;
//   constructor(private carService:CarService) { }

//   ngOnInit(): void {
//     this.getCars();
//   }

//   getCars(){
//     this.carService.getCars()
//     .subscribe(response =>{this.cars= response.data});
//     this.dataLoaded=true;
//   }

// }
