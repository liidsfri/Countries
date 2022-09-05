import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Country } from '../models/countrie.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  url = 'https://restcountries.com/v2/all';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.url);
  }

}
