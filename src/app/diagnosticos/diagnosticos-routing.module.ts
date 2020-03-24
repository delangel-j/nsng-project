import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DiagnosticosComponent } from "./diagnosticos.component";

const routes: Routes = [
    { path: "", component: DiagnosticosComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class DiagnosticosRoutingModule { }
