import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Compiler, CompilerFactory, COMPILER_OPTIONS } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { ComponentsModule } from '@anyapp/components';
import { ComponentsModule } from '../../projects/components/src/public_api'; 
import { TestComponent } from './test/test.component';
import { ButtonTestComponent } from './components/controls/button-test/button-test.component';
import { ListTestComponent } from './components/list-test/list-test.component';
import { TableTestComponent } from './components/table-test/table-test.component';
import { AnyAppComponentsConfig } from '@anyapp/components';
import { FieldTestComponent } from './components/controls/field-test/field-test.component';
import { FormTestComponent } from './components/form-test/form-test.component';
import { DynamicFormTestComponent } from './components/dynamic-form-test/dynamic-form-test.component';

export const routes: Routes = [
  { path: 'components/controls/button', component: ButtonTestComponent },
  { path: 'components/controls/field', component: FieldTestComponent },
  { path: 'components/list', component: ListTestComponent },
  { path: 'components/table', component: TableTestComponent },
  { path: 'components/form', component: FormTestComponent },
  { path: 'components/dynamic-form', component: DynamicFormTestComponent },
  { path: 'components/dynamic-compile', loadChildren: './components/dynamic-compile-test/dynamic-compile-test.module#DynamicCompileTestModule' },// component: DynamicCompileTestComponent },
  { path: 'components/lazy-load', loadChildren: './components/lazy-load-test/lazy-load-test.module#LazyLoadTestModule' },
  { path: 'test', component: TestComponent },
  { path: '**', redirectTo: 'test', pathMatch: 'full' },
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule.forRoot(<AnyAppComponentsConfig>{locales: {paginator_itemsPerPage: "loleallsla"}}),
    //CoreModule,
    //ToolsModule
    RouterModule.forRoot(routes)
  ],
  providers: [
  ],
  
  declarations: [
    AppComponent,
    TestComponent,
    ButtonTestComponent,
    ListTestComponent,
    TableTestComponent,
    FieldTestComponent,
    FormTestComponent,
    DynamicFormTestComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
