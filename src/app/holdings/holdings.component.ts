import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { Holding, HoldingsService } from './holdings.service';

@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.less']
})
export class HoldingsComponent implements OnInit {
  holdings!: Holding[];
  // Pie Chart Options
  view: [number, number] = [700, 400];
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  
  constructor(private holdingsService: HoldingsService) {}

  ngOnInit() {
    this.getHoldings();
  }

  getHoldings() {
    this.holdingsService.getHoldings().subscribe(holdings => (this.holdings = holdings));
  }

  dollarFormatting(val: number) {
    return `$${Math.round(val).toLocaleString()}`;
  }
}