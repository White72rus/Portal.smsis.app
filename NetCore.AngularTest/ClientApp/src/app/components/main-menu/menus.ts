import { Menu } from "./menu.interface";

export class Menus {
    
    public get menus() : Menu[] {
        return [
            {
                name: "Главная",
                icon: "icon-solid ico-home",
                active: true,
                user: "user",
                online: true,
                route: "",
                submenu: [
                    {name: "item_1", route: "child"},
                    {name: "item_2", route: ""},
                    {name: "item_3", route: ""},
                    {name: "item_4", route: ""},
                    {name: "item_5", route: ""},
                ],
            },
            {
                name: "Базаы данных",
                icon: "icon-solid ico-database",
                active: false,
                user: "user",
                online: true,
                route: "/data-base",
                submenu: [
                    {name: "Нумерации по области общая ЕФ", route: "num_ef"},
                    {name: "item_2", route: ""},
                    {name: "item_3", route: ""},
                    {name: "item_4", route: ""},
                    {name: "item_5", route: ""},
                    {name: "item_6", route: ""},
                ],
            },
            {
                name: "Настройки",
                icon: "icon-solid ico-settings",
                active: false,
                user: "admin",
                online: true,
                route: "",
                submenu: [
                    {name: "item_1", route: ""},
                    {name: "item_2", route: ""},
                    {name: "item_3", route: ""},
                ],
            },
            {
                name: "Ссылки",
                icon: "icon-solid ico-link",
                active: false,
                user: "user",
                online: true,
                route: "",
                submenu: [
                    {name: "item_1", route: ""},
                    {name: "item_2", route: ""},
                    {name: "item_3", route: ""},
                ],
            },
            {
                name: "Администрирование",
                icon: "icon-solid ico-admin",
                active: false,
                user: "admin",
                online: true,
                route: "",
                submenu: [
                    {name: "item_1", route: ""},
                    {name: "item_2", route: ""},
                    {name: "item_3", route: ""},
                ],
            },
            {
                name: "Инфо",
                icon: "icon-solid ico-info",
                active: false,
                user: "user",
                online: true,
                route: "",
                submenu: [
                    {name: "item_1", route: ""},
                ],
            },
        ]
    }
    
}