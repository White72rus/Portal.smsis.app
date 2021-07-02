import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainMenuComponent } from "./components/main-menu/main-menu.component";
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { SerchFieldComponent } from './components/serch-field/serch-field.component';
import { AccountComponent } from './components/account/account.component';
import { DatabaseComponent } from './components/data-base/data-base.component';
import { AppRoutingModule } from './app.routing.module';
import { NumRegionEfComponent } from './components/data-base/num-region-ef/num-region-ef.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        CounterComponent,
        FetchDataComponent,
        MainMenuComponent,
        SerchFieldComponent,
        AccountComponent,
        DatabaseComponent,
        NumRegionEfComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
