import { Component } from '@angular/core';
import { Country } from './models/countrie.model';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'countries';

  countries:Country[]=[];
  loading:boolean=true;
  light:boolean=true;

  constructor(private countriesService:CountriesService){
    this.countriesService.getCountries().subscribe(countries=>{
      this.countries=countries;
      this.loading=false;
    });
  }

  changeTheme(theme:boolean){
    this.light=false;
  }

}
