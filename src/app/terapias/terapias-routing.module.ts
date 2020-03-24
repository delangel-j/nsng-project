import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { TerapiasComponent } from "./terapias.component";

const routes: Routes = [
    { path: "", component: TerapiasComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class TerapiasRoutingModule { }
