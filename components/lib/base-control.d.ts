import { Injector, EventEmitter } from "@angular/core";
import { AnyAppComponentsConfig } from "./components.config";
import { ComponentsService } from "./components.service";
import { AnyAppEventModel } from "./components.model";
export declare abstract class AnyAppBaseControl {
    private _injector;
    onEvent: EventEmitter<AnyAppEventModel>;
    config: AnyAppComponentsConfig;
    componentsService: ComponentsService;
    constructor(_injector: Injector);
}
