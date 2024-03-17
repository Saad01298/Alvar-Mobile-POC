import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  disableNextButton = false;

  constructor(private location: Location, private dashboardService: DashboardService, private router: Router) { }

  ngOnInit(): void {
    this.disableNextButton = false;
  }

  ngAfterViewInit(): void {
    this.dashboardService.disableNextButton.subscribe(data=> {
      this.disableNextButton = data;
    });
  }
  
  returnToHome() {
    this.router.navigate(['/login']);
  }


  back() {
    this.location.back();
  }

  next() {
    this.location.forward();
  }
}
