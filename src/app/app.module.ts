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

export const routes: Routes = [
  { path: 'components/controls/button', component: ButtonTestComponent },
  { path: 'components/list', component: ListTestComponent },
  { path: 'test', component: TestComponent },
  { path: '**', redirectTo: 'test', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ButtonTestComponent,
    ListTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ComponentsModule,
    //CoreModule,
    //ToolsModule
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
