import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Menu } from "./menu.interface";
import { Menus } from "./menus";

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

    @Input() open : boolean;

    public menus: Menu[] = new Menus().menus;
    public currentUser: string = "admin";

    // UI element for "submenu"
    @ViewChild("submenu") submenuUiElement : ElementRef;

    constructor(private _elementRef: ElementRef) {
    }

    public toggle(index: number) : void {
        this.menus.filter(
            (menu, i) => i !== index && menu.active)
            .forEach(menu => menu.active = !menu.active);

        this.menus[index].active = !this.menus[index].active;

        console.log(this.open);
        console.log("active : " + this.menus[index].active);
    }

    private preprocessingMenus () : void {
        let temp : Menu[] = [];

        if (this.currentUser === "user") {
            for (const key in this.menus) {
                if (Object.prototype.hasOwnProperty.call(this.menus, key)) {
                    const element = this.menus[key];
                    if (element.user === "user") {
                        temp.push(element)
                    }
                }
            }
            this.menus = temp;
        }
    }

    ngOnInit() {
        this.preprocessingMenus();
        for (const key in this.menus) {
            if (Object.prototype.hasOwnProperty.call(this.menus, key)) {
                const element = this.menus[key];
                
            }
        }
    }

    ngAfterViewChecked() : void {
    }

    ngAfterViewInit() : void {
        console.log(this.submenuUiElement.nativeElement);
    }
}