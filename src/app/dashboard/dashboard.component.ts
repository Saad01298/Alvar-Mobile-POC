import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { DataService } from './data.component.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit  {
  
  lineChart: any;
  pieChart: any;
  barChart: any;
  pieIconVisible: any;

  startDate: any;
  endDate: any;

  currentRadioSelected: any;

  pieDataForNewMember: (string | number)[][] = [];
  lineAndBarDataForNewMember : (string | number)[][] = [];

  lineAndBarDataForIdCardAndWelcomeKit: (string | number)[][] = [];

  newMemberData: (string | number)[][] = [];
  idCardData: (string | number)[][] = []; 
  welcomeKitData: (string | number)[][] = []; 

  totalNewMembers: any;
  totalTermMembers: any;
  totalReinstatedMembers: any;
  totalDeceasedMembers: any;
  totalIdCardsSent: any;
  totalWelcomeKitSent: any;

  constructor(private data : DataService, private dashboardService: DashboardService) {}
  
  ngAfterViewInit(): void {
    this.disableNext();
  }
  
  ngOnDestroy(): void {
    this.enableNext();
  }

  ngOnInit(): void {

    this.lineChart = true;
    this.pieChart = false;
    this.barChart = false;
    this.pieIconVisible = false;

    this.currentRadioSelected = "member";

    this.newMemberData = [this.data.getNewMemberHeader(), ...this.data.getNewMemberData(25, 28)];
    this.idCardData = [this.data.getIdCardAndWelcomeKitHeader(), ...this.data.getIdCardData(25, 28)];
    this.welcomeKitData = [this.data.getIdCardAndWelcomeKitHeader(), ...this.data.getWelcomeKitData(25, 28)];

    this.totalNewMembers = 4407;
    this.totalTermMembers = 481;
    this.totalReinstatedMembers = 1089;
    this.totalDeceasedMembers = 96;
    this.totalIdCardsSent = 3910;
    this.totalWelcomeKitSent = 3100;

    this.startDate = "08/25/2023";
    this.endDate = "08/28/2023";
    
    this.loadCharts();
  }

  enableNext() {
    this.dashboardService.disableNextButton.next(false);
  }

  disableNext() {
    this.dashboardService.disableNextButton.next(true);
  }

  onItemChange(value: any){
    this.currentRadioSelected = value.target.defaultValue;
    this.loadCharts();
  }

  submit() {
    let sD = parseInt(this.startDate.slice(-2));
    let eD = parseInt(this.endDate.slice(-2));

    let sM = parseInt(this.startDate.slice(5,7));
    let eM = parseInt(this.endDate.slice(5,7));

    let sY = parseInt(this.startDate.slice(0,5));
    let eY = parseInt(this.endDate.slice(0,5));

    if(sM != 3 || eM != 3 || sY != 2024 || eY != 2024 ) {
      alert("For POC, only March 2024 data is available");
      return;
    }

    if(eD<sD) {
      alert("End Date can't be lesser than Start Date");
      return;
    }

    if(sD == 25 && eD < 31) {
      this.totalNewMembers = 4261;
      this.totalTermMembers = 481;
      this.totalReinstatedMembers = 1089;
      this.totalDeceasedMembers = 96;
      this.totalIdCardsSent = 3810;
      this.totalWelcomeKitSent = 3100;
    } else if (sD < 25 && eD == 31) {
      this.totalNewMembers = 4163;
      this.totalTermMembers = 509;
      this.totalReinstatedMembers = 1199;
      this.totalDeceasedMembers = 101;
      this.totalIdCardsSent = 3910;
      this.totalWelcomeKitSent = 3200;
    } else if (sD < 16 && eD < 24) {
      this.totalNewMembers = 4041;
      this.totalTermMembers = 703;
      this.totalReinstatedMembers = 989;
      this.totalDeceasedMembers = 91;
      this.totalIdCardsSent = 3809;
      this.totalWelcomeKitSent = 3606;
    } else if (sD < 15 && eD > 20) {
      this.totalNewMembers = 5407;
      this.totalTermMembers = 781;
      this.totalReinstatedMembers = 1689;
      this.totalDeceasedMembers = 150;
      this.totalIdCardsSent = 4310;
      this.totalWelcomeKitSent = 4000;
    } else if (sD > 10 && eD < 25) {
      this.totalNewMembers = 3407;
      this.totalTermMembers = 381;
      this.totalReinstatedMembers = 889;
      this.totalDeceasedMembers = 77;
      this.totalIdCardsSent = 2910;
      this.totalWelcomeKitSent = 2400;
    } else if (sD > 1 && eD < 10) {
      this.totalNewMembers = 3407;
      this.totalTermMembers = 401;
      this.totalReinstatedMembers = 689;
      this.totalDeceasedMembers = 90;
      this.totalIdCardsSent = 2910;
      this.totalWelcomeKitSent = 2601;
    } else if (eD <= sD + 3) {
      this.totalNewMembers = this.totalNewMembers + 68;
      this.totalTermMembers = this.totalTermMembers + 10;
      this.totalReinstatedMembers = this.totalReinstatedMembers + 19;
      this.totalDeceasedMembers = this.totalDeceasedMembers + 63;
      this.totalIdCardsSent = this.totalIdCardsSent + 29;
      this.totalWelcomeKitSent = this.totalWelcomeKitSent + 3;
    } else {
      this.totalNewMembers = this.totalNewMembers - 169;
      this.totalTermMembers = this.totalTermMembers - 197;
      this.totalReinstatedMembers = this.totalReinstatedMembers - 67;
      this.totalDeceasedMembers = this.totalDeceasedMembers - 83;
      this.totalIdCardsSent = this.totalIdCardsSent - 63;
      this.totalWelcomeKitSent = this.totalWelcomeKitSent - 97;
    }

    this.newMemberData = [this.data.getNewMemberHeader(), ...this.data.getNewMemberData(sD, eD)];
    this.idCardData = [this.data.getIdCardAndWelcomeKitHeader(), ...this.data.getIdCardData(sD, eD)];
    this.welcomeKitData = [this.data.getIdCardAndWelcomeKitHeader(), ...this.data.getWelcomeKitData(sD, eD)];

    this.loadCharts();
  }
  
  changeGraph(chart: string) {
    if(chart == "pie") {
      this.pieChart = true;
      this.lineChart = false;
      this.barChart = false;
    } else if (chart == "bar") {
      this.barChart = true;
      this.pieChart = false;
      this.lineChart = false;
    } else {
      this.lineChart = true;
      this.barChart = false;
      this.pieChart = false;
    }
  }

  makePieIconVisible(iconFlag : string) {
    if(iconFlag == "Y")
      this.pieIconVisible = false;
    else 
      this.pieIconVisible = true;
  }

  loadCharts() {

    let newMember: (string | number)[][];
    let idCard: (string | number)[][];
    let welcomeKit: (string | number)[][];

    if(this.currentRadioSelected == "member") {
      newMember = this.newMemberData;
    } else if (this.currentRadioSelected == "card") {
      idCard = this.idCardData;
    } else {
      welcomeKit = this.welcomeKitData;
    }

    google.charts.load('current', {'packages':['corechart', 'bar']});
    google.charts.setOnLoadCallback(() => {
      if(this.currentRadioSelected == "member") {
        drawLineChart(newMember);
        drawPieChart(newMember);
        drawBarChart(newMember);
      } else if (this.currentRadioSelected == "card") {
        drawLineChart(idCard);
        drawBarChart(idCard);
      } else {
        drawLineChart(welcomeKit);
        drawBarChart(welcomeKit);
      }
    });

    function drawPieChart (dataForTable: any) {
      var data = google.visualization.arrayToDataTable(dataForTable);

      var options = {};

      var chartElement = document.getElementById('piechart');
      if (chartElement !== null) {
        var chart = new google.visualization.PieChart(chartElement);
        chart.draw(data, options);
      }
    }


    function drawBarChart (dataForTable: any) {
      var data = google.visualization.arrayToDataTable(dataForTable);

      var options: google.visualization.ColumnChartOptions = {
        hAxis: {
          title: "Date's"
        },
        vAxis: {
          title: "Count's",
          ticks: [0, 500, 1000, 1500, 2000]
        }
      };

      var chartElement = document.getElementById('columnchart_material');
      if (chartElement !== null) {
        var chart = new google.visualization.ColumnChart(chartElement);
        chart.draw(data, options);
      }
    }


    function drawLineChart (dataForTable: any) {
      var data = google.visualization.arrayToDataTable(dataForTable);

      var options: google.visualization.LineChartOptions = {
        curveType: 'function',
        hAxis: {
          title: "Date's"
        },
        vAxis: {
          title: "Count's",
          ticks: [0, 500, 1000, 1500, 2000]
        }
      };

      var chartElement = document.getElementById('curve_chart');
      if (chartElement !== null) {
        var chart = new google.visualization.LineChart(chartElement);
        chart.draw(data, options);
      }
    }
  }
}


