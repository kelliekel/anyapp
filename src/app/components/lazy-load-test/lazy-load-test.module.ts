import { NgModule } from "@angular/core";
import { LazyLoadTestComponent } from "./lazy-load-test.component";
import { Routes, RouterModule } from "@angular/router";
import { ComponentsModule } from '@anyapp/components';

export const routes: Routes = [
    { path: '', component: LazyLoadTestComponent },
  ];

@NgModule({
    imports: [
        ComponentsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [        
        LazyLoadTestComponent
    ],
    providers: [
    ]
})
export class LazyLoadTestModule {

}