import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Country } from 'src/app/models/countrie.model';
import * as _ from 'lodash';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit, OnChanges {

  @Input() countries:Country[]=[];
  @Input() loading:boolean=true;
  @Input() light:boolean=true;
  countriesFil:Country[]=[];

  searchInputControl: FormControl = new FormControl();

  constructor() {}

  ngOnInit(): void {
    /**
    *Detecta las modificaciones del input del buscador
    */
    this.searchInputControl.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(0)
    ).subscribe((keyword) => {
      this.searchCountries(keyword)
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.countriesFil=changes['countries'].currentValue;
  }

  searchCountries(search:string){
    this.countriesFil=this.countries.filter(country => _.includes(country.name.toLowerCase(), search.toLowerCase()));
  }

  filterRegion(region:string){
    this.countriesFil=this.countries.filter(country => _.includes(country.region, region));
  }

}
