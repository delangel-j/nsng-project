import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TerapiasRoutingModule } from "./terapias-routing.module";
import { TerapiasComponent } from "./terapias.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TerapiasRoutingModule
    ],
    declarations: [
        TerapiasComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TerapiasModule { }
