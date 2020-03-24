import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CitasRoutingModule } from "./citas-routing.module";
import { CitasComponent } from "./citas.component";

import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CitasRoutingModule,
        NativeScriptUIChartModule,
    ],
    declarations: [
        CitasComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CitasModule { }
