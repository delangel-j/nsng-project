import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Terapia } from '~/app/shared/terapia/terapia.model'
import { Page } from "tns-core-modules/ui/page/page";
import { ItemEventData } from "tns-core-modules/ui/list-view/list-view";

@Component({
    selector: "Terapias",
    templateUrl: "./terapias.component.html"
})
export class TerapiasComponent implements OnInit {
    terapia: Terapia;
    prueba = '';

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
        this.terapia = new Terapia();
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onSelect(args: ItemEventData) {


    }
}
