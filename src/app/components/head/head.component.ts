import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  light: boolean=true;
  @Output() onChangetheme:EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(){
    this.light=!this.light;
    this.onChangetheme.emit(this.light);
  }

}
