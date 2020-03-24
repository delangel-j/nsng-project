import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { DiagnosticosRoutingModule } from "./diagnosticos-routing.module";
import { DiagnosticosComponent } from "./diagnosticos.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DiagnosticosRoutingModule
    ],
    declarations: [
        DiagnosticosComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DiagnosticosModule { }
