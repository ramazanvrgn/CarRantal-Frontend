import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  constructor(private httpClient:HttpClient) { }

  getCarImages(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = environment.apiUrl+"carImages/getimagesbycarid?id="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
  getCarImageByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    return this.httpClient
    .get<ListResponseModel<CarImage>>(environment.apiUrl + 'carimages/getallbycarid?carId=' + carId)
  }
}