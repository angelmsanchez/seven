import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HomeService } from './../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  title = 'Service Workers';

  constructor(
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.homeService.getTest();
  }

  goTo(route): void {
    this.router.navigate([route]);
  }
}
