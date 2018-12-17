import { Component, OnInit } from '@angular/core';

// import { MetaService } from './core/services';

@Component({
    selector: 'app-seven',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        // private metaService: MetaService,
    ) { }

    ngOnInit(): void {
        this.metaData();
    }

    private metaData() {
        // this.metaService.setMetaData({
        //   title: 'Seven',
        //   description: 'Description Angular 7'
        // });
    }
}
