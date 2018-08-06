import { Input, Injector, Output, EventEmitter } from "@angular/core";
import { AnyAppComponentsConfig, ANYAPP_COMPONENTS_CONFIG } from "./components.config";
import { ComponentsService } from "./components.service";
import { AnyAppEventModel } from "./components.model";

export abstract class AnyAppBaseControl {
  @Output() onEvent: EventEmitter<AnyAppEventModel> = new EventEmitter<AnyAppEventModel>();
  
  config: AnyAppComponentsConfig;
  componentsService: ComponentsService;

  constructor(private _injector: Injector) {
    this.config = _injector.get(ANYAPP_COMPONENTS_CONFIG);
    this.componentsService = _injector.get(ComponentsService);
  }
}