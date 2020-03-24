import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { NotificacionesRoutingModule } from "./notificaciones-routing.module";
import { NotificacionesComponent } from "./notificaciones.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NotificacionesRoutingModule
    ],
    declarations: [
        NotificacionesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NotificacionesModule { }
