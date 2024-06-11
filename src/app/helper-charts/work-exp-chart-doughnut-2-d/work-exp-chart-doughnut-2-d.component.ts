import { Component } from '@angular/core';

const data = {
  chart: {
    caption: "Work Experience",
    subcaption: "Internships, Contracts, & Full-Time",
    showpercentvalues: "1",
    defaultcenterlabel: "",
    aligncaptionwithcanvas: "0",
    captionpadding: "0",
    decimals: "1",
    plottooltext:
      "",
    centerlabel: "",
    theme: "fusion"
  },
  data: [
    {
      label: "Capgemini",
      value: "41",
      color: "#3ABEF9"
    },
    {
      label: "HighRadius",
      value: "3",
      color: "#FF8F00"
    }
  ]
};


@Component({
  selector: 'app-work-exp-chart-doughnut-2-d',
  templateUrl: './work-exp-chart-doughnut-2-d.component.html',
  styleUrls: ['./work-exp-chart-doughnut-2-d.component.css']
})

export class WorkExpChartDoughnut2DComponent {
  width = "600";
  height = "400";
  type = "doughnut2d";
  dataFormat = "json";
  dataSource = data;
}
