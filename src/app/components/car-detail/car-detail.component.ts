  
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { CarImageService } from 'src/app/services/carImageService';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  cars:Car[]=[];
  carImages:CarImage[]=[];
  currentImage : CarImage;
  dataLoaded = false;
  imageBasePath = "https://localhost:5001/";

  constructor(
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private imageService:CarImageService,
    private carImageService:CarImageService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){
        this.getCarDetail(params["carId"]);
        this.getImagesByCarId(params["carId"]);
      }
      
     
    });
  }
  setClassName(index:Number){
    if(index == 0){
      return "carousel-item active";
    }
    else {
      return "carousel-item";
    }
  }
 
  getCarImages(carId:number){
    this.carImageService.getCarImageByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }

  getCarDetail(carId:number) {
    this.carService.getCarDetail(carId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getImagesByCarId(carId:number){
    
    this.imageService.getCarImages(carId).subscribe((response)=>{
      console.log(response.data)
      this.carImages=response.data;        
    });
    
  }

  getCurrentImageClass(image:CarImage){
    if(image===this.carImages[0]){
      return "carousel-item active"
    } else {
      return "carousel-item"
    }
  }

  getButtonClass(image:CarImage){
    if(image==this.carImages[0]){
      return "active"
    } else {
      return ""
    }
  }

}
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { CarDetails } from 'src/app/models/carDetail';
// import { CarImage } from 'src/app/models/carImage';
// import { CarService } from 'src/app/services/car.service';
// import { CarImageService } from 'src/app/services/carImageService';
// import { environment } from 'src/environments/environment';

// @Component({
//   selector: 'app-car-detail',
//   templateUrl: './car-detail.component.html',
//   styleUrls: ['./car-detail.component.css']
// })
// export class CarDetailComponent implements OnInit {

//   cars:CarDetails[]=[];
//   currentImage : CarImage;
//   dataLoaded=false;
//   imageBasePath = environment.baseUrl;
//   constructor(private carService:CarService,
//     private activetedRoute:ActivatedRoute,
//     private imageService:CarImageService
//     ) { }

//   ngOnInit(): void {
//     this.activetedRoute.params.subscribe(params=>{
//       if(params["brandId"]){
//         this.getBrandsByCars(params["brandId"]);
//       }
//       else if (params["colorId"]){
//         this.getColorsByCars(params["colorId"]);
//       }
//       else{
//         this.getCarDetails(params["carId"]);
//       }
//     })
//   }

//   getCarDetails(carId:number){
//     this.carService.getCarsDetails(carId)
//     .subscribe(response=>{this.cars=response.data})
//   }
//   getCarDetail(carId:number) {
//     this.carService.getCarDetail(carId).subscribe((response) => {
//       this.cars = response.data;
//       this.dataLoaded = true;
//     });
//   getColorsByCars(colorId:number){
//     this.carService.getColorsByCars(colorId)
//     .subscribe(response =>{this.cars= response.data});
//     this.dataLoaded=true;
//   }
//   getBrandsByCars(brandId:number){
//     this.carService.getBrandsByCars(brandId)
//     .subscribe(response =>{this.cars= response.data});
//     this.dataLoaded=true;
//   }

// }
