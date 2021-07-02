import { Component } from '@angular/core';
import { Menu } from './menu';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
    isExpanded = false;

    collapse() {
        this.isExpanded = false;
    }

    toggle() {
        this.isExpanded = !this.isExpanded;
    }

    menus: Menu[] = [
        {

            name: "Home",
            iconClass: "icon",
            active: true,
            submenu: [
                { name: "Item 1", url: "#" },
                { name: "Item 2", url: "#" },
                {
                    name: "Item 3", url: "#",
                },
                {
                    name: "Item 4", url: "#",
                }
            ],
        },
        {
            name: "Admin",
            iconClass: "icon",
            active: true,
            submenu: [
                {
                    name: "Item 1", url: "#",
                },
                {
                    name: "Item 2", url: "#",
                },
                {
                    name: "Item 3", url: "#",
                },
                {
                    name: "Item 4", url: "#",
                }
            ],
        }
    ];

}

