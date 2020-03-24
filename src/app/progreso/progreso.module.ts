import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ProgresoRoutingModule } from "./progreso-routing.module";
import { ProgresoComponent } from "./progreso.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ProgresoRoutingModule
    ],
    declarations: [
        ProgresoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ProgresoModule { }
