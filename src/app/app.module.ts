import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComponentsModule } from '../../projects/components/src/public_api'; //'@anyapp/components';
import { TestComponent } from './test/test.component';
import { ButtonTestComponent } from './components/controls/button-test/button-test.component';
import { CommonModule } from '@angular/common';
import { ListTestComponent } from './components/list-test/list-test.component';
import { TableTestComponent } from './components/table-test/table-test.component';
import { ANYAPP_COMPONENTS_CONFIG, AnyAppComponentsConfig } from '@anyapp/components';

export const routes: Routes = [
  { path: 'components/controls/button', component: ButtonTestComponent },
  { path: 'components/list', component: ListTestComponent },
  { path: 'components/table', component: TableTestComponent },
  { path: 'test', component: TestComponent },
  { path: '**', redirectTo: 'test', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ButtonTestComponent,
    ListTestComponent,
    TableTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ComponentsModule.forRoot(<AnyAppComponentsConfig>{locales: {paginator_itemsPerPage: "loleallsla"}}),
    //CoreModule,
    //ToolsModule
    RouterModule.forRoot(routes)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
