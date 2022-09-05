import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/models/countrie.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() country:Country={name:'', borders:[], capital:'', currencies:[], languages:[], nativeName:'', population:0, region:'', subregion:'', topLevelDomain:[], flags:{png:'', svg:''}};
  @Input() loading:boolean=true;
  @Input() light:boolean=true;

  constructor() { }

  ngOnInit(): void { }

}
