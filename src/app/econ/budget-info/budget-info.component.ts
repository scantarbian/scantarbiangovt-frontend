import { Component, OnInit } from '@angular/core';
import d3 from 'd3';
import econData from '../../../assets/data/econ.json';

@Component({
  selector: 'app-budget-info',
  templateUrl: './budget-info.component.html',
  styleUrls: ['./budget-info.component.scss']
})
export class BudgetInfoComponent implements OnInit {

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

  budgetPercentage:string = econData.budgetPercentage.toString();
  budgetTotal:string = this.addCommas(econData.GDP*econData.budgetPercentage/100);
  budgetStringified = this.numberString(econData.GDP*econData.budgetPercentage/100);

  //TO-DO: IMPLEMENT DONUT CHART WITH D3.JS TO DISPLAY BUDGET
}
