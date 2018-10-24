import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html'
})
export class SideNavComponent implements OnInit {

  ngOnInit(): void {
    console.log('SideNavComponent');
  }
}
