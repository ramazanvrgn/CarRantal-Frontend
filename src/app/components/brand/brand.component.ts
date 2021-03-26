import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[];
  dataLoaded=false;
  currentBrand: Brand;
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }
  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
  }
  getCurrentBrandClass(brand:Brand){
    if(brand==this.currentBrand){
      return "dropdown-item active"
    } else {
      return "dropdown-item"
    }
  }
  getAllBrandClass(){
    if(!this.currentBrand){
      return "dropdown-item active"
    }else{
      return "dropdown-item"
    }
  }

  getBrands(){
    this.brandService.getBrands()
    .subscribe(response => {this.brands=response.data});
    this.dataLoaded=true;
  }

  

}
