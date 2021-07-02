import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-num-region-ef',
    templateUrl: './num-region-ef.component.html',
    styleUrls: ['./num-region-ef.component.scss']
})
export class NumRegionEfComponent implements OnInit {

    public data : any;

    public TableHeader: string[] = ["Обект", "Подключение", "Диапазон", "Монтированная емкость", "Примечание"];
    public TableElement: string[] = ["Object", "ConnectionOver", "Range", "MountedCapacity", "Notes"];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getDataApi().subscribe((response) => {
            this.data = response.body

            console.log(this.data);     // CONSOLE

        },
        (error: HttpErrorResponse) => {
            console.error(error);
        });
    }

}
