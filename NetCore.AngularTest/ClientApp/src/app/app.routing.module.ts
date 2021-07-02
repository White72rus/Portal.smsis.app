import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { ChildrenComponent } from './components/children/children.component';
import { CounterComponent } from './components/counter/counter.component';
import { DatabaseComponent } from './components/data-base/data-base.component';
import { NumRegionEfComponent } from './components/data-base/num-region-ef/num-region-ef.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent, 
        // pathMatch: 'full', 
        children: [
            {
                path: 'child', component: ChildrenComponent
            }
        ],
    },
    { 
        path: 'counter', 
        component: CounterComponent
    },
    { 
        path: 'fetch-data', 
        component: FetchDataComponent 
    },
    { 
        path: 'data-base', 
        component: DatabaseComponent,
        children: [
            {
                path: 'num_ef', component: NumRegionEfComponent    //Таблица нумерации по области-общая ЕF
            }
        ],
        
    },
    { 
        path: 'account', 
        component: AccountComponent,
        
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
