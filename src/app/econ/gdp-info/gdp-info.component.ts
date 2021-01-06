import { Component, OnInit } from '@angular/core';
import econData from '../../../assets/data/econ.json';
import censusData from '../../../assets/data/census.json';

@Component({
  selector: 'app-gdp-info',
  templateUrl: './gdp-info.component.html',
  styleUrls: ['./gdp-info.component.scss']
})
export class GdpInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  addCommas(x:number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  numberString(value:number) {
    return Math.abs(Number(value)) >= 1.0e+9
    ? Math.trunc(Math.abs(Number(value)) / 1.0e+9) + " billion"
    : Math.abs(Number(value)) >= 1.0e+6
    ? Math.trunc(Math.abs(Number(value)) / 1.0e+6) + " million"
    : Math.abs(Number(value)) >= 1.0e+3
    ? Math.trunc(Math.abs(Number(value)) / 1.0e+3) + " thousand"
    : Math.abs(Number(value));
  }

  gdp:string = this.addCommas(econData.GDP);
  gdpStringified = this.numberString(econData.GDP);
  gdpPerCap:string = this.addCommas(econData.GDP/censusData.pop.total).slice(0,-12); //slice is used to truncate

}
