import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lob',
  templateUrl: './lob.component.html',
  styleUrls: ['./lob.component.css']
})
export class LobComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  statesPage() {
    this.router.navigate(['states'], {relativeTo: this.route}); 
  }

}
