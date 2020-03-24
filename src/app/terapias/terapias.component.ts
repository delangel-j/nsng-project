import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Terapias",
    templateUrl: "./terapias.component.html"
})
export class TerapiasComponent implements OnInit {

    terapias = [
        {
            idTerapia: 1,
            terapia: "Respiración y relajación",
            img: "~/images/respiracion.jpg"
        },
        {
            idTerapia: 2,
            terapia: "Prefonatorios",
            img: "~/images/prefonatorios.jpg"
        },
        {
            idTerapia: 3,
            terapia: "Praxias orofaciales",
            img: "~/images/praxias.jpg"
        },
        {
            terapia: "Ejercicios de fonemas",
            img: "~/images/fonemas.jpg"
        }
    ]

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
