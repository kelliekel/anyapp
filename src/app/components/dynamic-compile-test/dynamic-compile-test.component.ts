import { Component, OnInit, ViewChild, ViewContainerRef, Compiler, NgModule,
  ComponentFactory, ModuleWithComponentFactories, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, Validators } from '@angular/forms';
import { DynamicCompileTestService, CustomComponent, CustomNgModule } from './dynamic-compile-test.service';

@Component({
  selector: 'aa-dynamic-compile-test',
  templateUrl: './dynamic-compile-test.component.html',
  styleUrls: ['./dynamic-compile-test.component.scss']
})
export class DynamicCompileTestComponent implements OnInit {


  //https://github.com/angular/angular-cli/issues/9306#issuecomment-378081686

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;
  private componentRef: ComponentRef<{}>;
  
  testControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  templateControl: FormControl = new FormControl('<div>\nHello, {{name}}\n {{service.foo()}}</div>', [
    Validators.required,
  ]);

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private compiler: Compiler) { }

  ngOnInit() {
  }

  // compileTemplate() {
  //   const template = '<span>generated on the fly: {{name}}</span>';

  //   const tmpCmp = Component({ template: template })(class {
  //   });
  //   const tmpModule = NgModule({ declarations: [tmpCmp] })(class {
  //   });

  

  compileTemplate() {
    let metadata = {
        selector: `runtime-component-sample`,
        template: this.templateControl.value
    };

    let factory = this.createComponentFactorySync(this.compiler, metadata, null);
    
    if (this.componentRef) {
        this.componentRef.destroy();
        this.componentRef = null;
    }
    this.componentRef = this.container.createComponent(factory);
    //this.componentRef.instance.name = "";
  }

//   private createComponentFactorySync(compiler: Compiler, metadata: Component, componentClass: any): ComponentFactory<any> {
//     let something = this.testControl.value;

//     const cmpClass = class RuntimeComponent { 
//       constructor(public service: DynamicCompileTestService) {
//         console.log(service);
//         console.log(service.foo());
//       }
//       name: string = something 
//     }; //componentClass || 
//     // cmpClass['decorators'] = [{
//     //   type: Component, 
//     //   args: [metadata]
//     // }]

//     const decoratedCmp = Component(metadata)(cmpClass);

//     const RuntimeComponentModule = NgModule({ declarations: [decoratedCmp], providers: [DynamicCompileTestService] })(class {});
//     // @NgModule({ imports: [CommonModule], declarations: [decoratedCmp] })
//     // class RuntimeComponentModule { }

//     let module: ModuleWithComponentFactories<any> = compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
//     return module.componentFactories.find(f => f.componentType === decoratedCmp);
// }
private createComponentFactorySync(compiler: Compiler, metadata: Component, componentClass: any): ComponentFactory<any> {
  let something = this.templateControl.value;
  let name = this.testControl.value;

  @CustomComponent({
    selector: 'lazy-component',
    template: something,
    providers: [DynamicCompileTestService]
  })
  class RuntimeComponent {
    name: string = name;
    constructor(public service: DynamicCompileTestService) {
    }
  }

  @CustomNgModule({
    declarations: [RuntimeComponent],
    //providers: [SampleService]
  })
  class RuntimeModule {
  }

  let module: ModuleWithComponentFactories<any> = compiler.compileModuleAndAllComponentsSync(RuntimeModule);
  return module.componentFactories.find(f => f.componentType === RuntimeComponent);
}


// compileTemplate() {
//   let metadata = {
//       selector: `runtime-component-sample`,
//       template: this.templateControl.value
//   };

//   let factory = this.createComponentFactorySync(this.compiler, metadata, null);
  
//   if (this.componentRef) {
//       this.componentRef.destroy();
//       this.componentRef = null;
//   }
//   this.componentRef = this.container.createComponent(factory);
// }

//   private createComponentFactorySync(compiler: Compiler, metadata: Component, componentClass: any): ComponentFactory<any> {
//     let something = this.testControl.value;

//     const cmpClass = componentClass || class RuntimeComponent { name: string = something };
//     const decoratedCmp = Component(metadata)(cmpClass);

//     @NgModule({ imports: [CommonModule], declarations: [decoratedCmp] })
//     class RuntimeComponentModule { }

//     let module: ModuleWithComponentFactories<any> = compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
//     return module.componentFactories.find(f => f.componentType === decoratedCmp);
// }

}
