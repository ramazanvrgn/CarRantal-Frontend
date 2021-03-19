import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Car } from 'src/app/models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath =environment.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath =environment.apiUrl + "cars/getcarsbybrandid?id="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath =environment.apiUrl + "cars/getcarsbycolorid?id="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsBySelect(brandId:number, colorId:number):Observable<ListResponseModel<Car>>{
    let newPath =environment.apiUrl + "cars/getbyselected?brandId="+brandId+"&colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetails():Observable<ListResponseModel<Car>>{
    let newPath = environment.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarDetail(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = environment.apiUrl + 'cars/getcardetail?id='+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

}
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { Car } from '../models/car';
// import { CarDetails } from '../models/carDetail';
// import { ListResponseModel } from '../models/listResponseModel';


// @Injectable({
//   providedIn: 'root'
// })
// export class CarService {


//   constructor(private httpClient:HttpClient) { }

//   getCars():Observable<ListResponseModel<Car>>{
//     let newPath= environment.apiUrl+"cars/getall"
//      return this.httpClient.get<ListResponseModel<Car>>(newPath);
//   }
//   getCarDetail(carId:number):Observable<ListResponseModel<Car>>{
//     let newPath = environment.apiUrl + 'cars/getcardetail?carId='+carId
//     return this.httpClient.get<ListResponseModel<Car>>(newPath)
//   }

//   getCarsDetails(carId: number): Observable<ListResponseModel<CarDetails>> {
//     let newPath =environment.apiUrl + 'cars/getcardetail?carId=' + carId;
//     return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
//   }

//   getBrandsByCars(brandId:number):Observable<ListResponseModel<CarDetails>>{
//     let newPath=environment.apiUrl+"cars/getcarsbybrandid?id="+brandId
//     return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)
//   }
//   getColorsByCars(colorId:number):Observable<ListResponseModel<CarDetails>>{
//     let newPath=environment.apiUrl+"cars/getcarsbycolorid?id="+colorId
//     return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)
//   }
// }
