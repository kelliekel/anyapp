import { NgModule, CompilerFactory, COMPILER_OPTIONS, Compiler } from "@angular/core";
import { DynamicCompileTestComponent } from "./dynamic-compile-test.component";
import { Routes, RouterModule } from "@angular/router";
import { ComponentsModule } from '@anyapp/components';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}

export const routes: Routes = [
    { path: '', component: DynamicCompileTestComponent },
  ];

@NgModule({
    imports: [
        ComponentsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [        
        DynamicCompileTestComponent
    ],
    providers: [
        {
        provide: COMPILER_OPTIONS,
        useValue: {},
        multi: true
        },
        {
        provide: CompilerFactory,
        useClass: JitCompilerFactory,
        deps: [COMPILER_OPTIONS]
        },
        {
        provide: Compiler,
        useFactory: createCompiler,
        deps: [CompilerFactory]
        }
    ]
})
export class DynamicCompileTestModule {

}