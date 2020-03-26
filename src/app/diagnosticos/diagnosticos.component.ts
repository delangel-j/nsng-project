import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Paciente } from "../shared/pacientes/paciente.model";
import { PacienteService } from "../shared/pacientes/paciente.service";

@Component({
    selector: "Diagnosticos",
    templateUrl: "./diagnosticos.component.html",
    styleUrls : ["./diagnosticos.component.css" ],
    providers: [PacienteService]
})
export class DiagnosticosComponent implements OnInit {

    listaPaciente: Array<Paciente> = [];

    diagnosticos: {diagnostico1: string, diagnostico2: string, diagnostico3: string }[] = [
        {
            diagnostico1: 'Retardo de lenguaje anártico moderado',
            diagnostico2: 'Audición normal',
            diagnostico3: 'Audución bilateral'
        }
    ]
    terapias: { terapia1: string, terapia2: string, terapia3: string, terapia4: string, terapia5: string}[] = [
        {
            terapia1: '1. Ejercicios de respiración y relajación.',
            terapia2: '2. Ejercicios prefonatorios y praxias orofaciales.',
            terapia3: '3. Ejercicios para fonemas /r/, /rr/, /l/, /ch/, /f/, /k/, /s/, intermedia',
            terapia4: '4. Trabajar aumento de vocabulario acorde a la edad y clasificación por campos semánticos. Hacer láminas con figuras de buen tamaño para que las aprenda a escribir',
            terapia5: '5. Trabajar estimulación de aspecto pragmático mediante cantos, juegos y cuentos.'
        }
    ]
    planTrabajo: {plan1: string, plan2: string}[] = [
        {
            plan1: '1. Continuar terapia de lenguaje y aprendizaje semanal',
            plan2: '2. Cita al terminar terapias'
        }
    ]
         public showCollapseBox = false;
         public showCollapseBox2 = false;
         public showCollapseBox3 = false;
         public showCollapseBox4 = false;
         isCollapsed = true;
         isCollapsed2 = true;
         isCollapsed3 = true;
         isCollapsed4 = true;

         goCollapse(args) {
            if (this.showCollapseBox){
                this.showCollapseBox = false;
                this.isCollapsed = !this.isCollapsed;
            }
            else{
                this.showCollapseBox = true;
                this.isCollapsed = !this.isCollapsed;
            }
        }
        goCollapse2(args) {
            if (this.showCollapseBox2){
                this.showCollapseBox2 = false;
                this.isCollapsed2 = !this.isCollapsed2;
            }
            else{
                this.showCollapseBox2 = true;
                this.isCollapsed2 = !this.isCollapsed2;
            }
        }
        goCollapse3(args) {
            if (this.showCollapseBox3){
                this.showCollapseBox3 = false;
                this.isCollapsed3 = !this.isCollapsed3;
            }
            else{
                this.showCollapseBox3 = true;
                this.isCollapsed3 = !this.isCollapsed3;
            }
        }
        goCollapse4(args) {
            if (this.showCollapseBox4){
                this.showCollapseBox4 = false;
                this.isCollapsed4 = !this.isCollapsed4;
            }
            else{
                this.showCollapseBox4 = true;
                this.isCollapsed4 = !this.isCollapsed4;
            }
        }
    constructor(private pacienteService: PacienteService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.pacienteService.obtenerPacientes()
        .subscribe((fetchPaciente: []) => {
            fetchPaciente.forEach((pacienteObject: Paciente) => {
                this.listaPaciente.unshift(pacienteObject);
            });
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }


}
