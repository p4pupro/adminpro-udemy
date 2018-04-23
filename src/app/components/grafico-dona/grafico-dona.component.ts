import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {


 @Input('chartLabels')  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
 @Input('chartData')  public doughnutChartData:number[] = [350, 450, 100];
 @Input('chartType')  public doughnutChartType:string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
