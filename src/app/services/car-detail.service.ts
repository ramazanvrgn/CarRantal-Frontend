import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDetails } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  constructor(private httpClient:HttpClient) { }

  getCarDetail(carId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath =environment.apiUrl+"cars/getcardetail?carId="+carId
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)
  }
}
