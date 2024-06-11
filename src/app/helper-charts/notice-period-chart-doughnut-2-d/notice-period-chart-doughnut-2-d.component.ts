import { Component } from '@angular/core';
import contentData from '../../../assets/content.json';


// Interface for individual data items
interface ChartDataItem {
  label: string;
  value: string;
}

// Interface for the chart configuration
interface ChartConfig {
  caption: string;
  subcaption: string;
  showpercentvalues: string;
  defaultcenterlabel: string;
  aligncaptionwithcanvas: string;
  captionpadding: string;
  decimals: string;
  plottooltext: string;
  centerlabel: string;
  theme: string;
}

// Main interface for the chart data object
interface ChartData {
  chart: ChartConfig;
  data: ChartDataItem[];
}




@Component({
  selector: 'app-notice-period-chart-doughnut-2-d',
  templateUrl: './notice-period-chart-doughnut-2-d.component.html',
  styleUrls: ['./notice-period-chart-doughnut-2-d.component.css']
})


export class NoticePeriodChartDoughnut2DComponent {

  npStartTime: any = new Date(2024,6,4,0,0,0)
  npEndTime: any = new Date(2024,8,30,23,59,59)


  chartData: ChartData = {
    chart: {
      caption: "Notice Period Information",
      subcaption: `
                    <b>Total Days: ${contentData.noticeperioddetails.noticeperiodtotaldays}</b> <br>
                  `,
      showpercentvalues: "",
      defaultcenterlabel: `<b>Status:</b> ${contentData.noticeperioddetails.statusdetails.message}`,
      aligncaptionwithcanvas: "0",
      captionpadding: "0",
      decimals: "1",
      plottooltext: "",
      centerlabel: "",
      theme: "fusion"
    },
    data: [
      {
        label: "Remaining Days",
        value: `${contentData.noticeperioddetails.noticeperioddaysremaining}`
      },
      {
        label: "Days Passed",
        value: `${contentData.noticeperioddetails.noticeperiodtotaldays - contentData.noticeperioddetails.noticeperioddaysremaining}`
      }
    ]
  };


  width = "600";
  height = "400";
  type = "doughnut2d";
  dataFormat = "json";
  dataSource = this.chartData;


}
