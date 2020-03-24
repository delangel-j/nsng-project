import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    { path: "diagnosticos", loadChildren: () => import("~/app/diagnosticos/diagnosticos.module").then((m) => m.DiagnosticosModule) },
    { path: "citas", loadChildren: () => import("~/app/citas/citas.module").then((m) => m.CitasModule) },
    { path: "progreso", loadChildren: () => import("~/app/progreso/progreso.module").then((m) => m.ProgresoModule) },
    { path: "terapias", loadChildren: () => import("~/app/terapias/terapias.module").then((m) => m.TerapiasModule) },
    { path: "notificaciones", loadChildren: () => import("~/app/notificaciones/notificaciones.module").then((m) => m.NotificacionesModule) },

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
