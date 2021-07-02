import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public titleString = 'app';
    public isClose: boolean = false;
    public isOpen: boolean = true;

    /**
     *
     */
    constructor(private title : Title) {
        title.setTitle(this.titleString);
    }

    public sidebarSwitch() : void {
        this.isClose = !this.isClose;
    }

    public onMouseMoveSidebar(event) : void {
        if (this.isClose) {
            this.isOpen = true;
            console.log("isClose : " + this.isClose + "\nisOpen : " + this.isOpen);
            console.log(event);
        }
    }

    public onMouseOutSidebar(event) : void {
        if (this.isClose) {
            this.isOpen = false;
            console.log("isClose : " + this.isClose + "\nisOpen : " + this.isOpen);
            console.log(event);
        }
    }

    public toggle(element: any) : void {
        console.log(element);
    }

    ngOnInit(): void {
        //if (window.location.pathname !== "/")
        //    window.location.href = "/";
    }

    ngOnDestroy(): void {
    }
}

