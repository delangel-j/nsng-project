import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { Persona } from "../shared/persona/persona.model";
import { PersonaService } from "../shared/persona/persona.service";

@Component({
    selector: "Progreso",
    templateUrl: "./progreso.component.html",
    providers: [PersonaService]
})
export class ProgresoComponent implements OnInit {

    personaList: Array<Persona> = [];


    progresos: {bloque: string, inicio: string, fin: string}[] = [
        {
            bloque: "Bloque 4",
            inicio: "2018/08/30",
            fin: "2019/10/22"
        },
        {
            bloque: "Bloque 3",
            inicio: "2019/03/10",
            fin: "2019/08/30"
        },
        {
            bloque: "Bloque 2",
            inicio: "2019/01/15",
            fin: "2019/03/10"
        },
        {
            bloque: "Bloque 1",
            inicio: "2018/11/15",
            fin: "2018/01/15"
        }

        ]

    constructor(private personaService: PersonaService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.personaService.load()
        .subscribe((loadedPersonas: []) => {
            loadedPersonas.forEach((personaObject: Persona) => {
                this.personaList.unshift(personaObject);
            });
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
