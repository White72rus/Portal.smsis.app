import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-database',
    templateUrl: './data-base.component.html',
    styleUrls: ['./data-base.component.scss']
})
export class DatabaseComponent implements OnInit {

    constructor(
        private dataService: DataService
    ) { }

    ngOnInit() {
        
    }

}
