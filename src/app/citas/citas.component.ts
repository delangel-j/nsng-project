import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import * as calendarModule from "nativescript-ui-calendar";
import { Color } from "tns-core-modules/color";

@Component({
    selector: "Citas",
    templateUrl: "./citas.component.html",
    styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
    calendarEvents = [];

    reporteCitas: {fecha: string, idExpediente: string, nombre: string, horaInicio: string, horaFin: string}[] = [
        { fecha: "14/02/2020", idExpediente: "LTF18" , nombre: "José Carlos Huerta Gonzáles", horaInicio: "12:00", horaFin: "13:30" },
        { fecha: "21/02/2020", idExpediente: "LTF18" , nombre: "José Carlos Huerta Gonzáles", horaInicio: "12:00", horaFin: "13:30" },
        { fecha: "28/02/2020", idExpediente: "LTF18" , nombre: "José Carlos Huerta Gonzáles", horaInicio: "12:00", horaFin: "13:30" }
    ];

    categoricalSource: { Country: string, Amount: number, SecondVal: number, ThirdVal: number }[] = [
        { Country: "Germany", Amount: 15, SecondVal: 14, ThirdVal: 24 },
        { Country: "France", Amount: 13, SecondVal: 23, ThirdVal: 25 },
        { Country: "Bulgaria", Amount: 24, SecondVal: 17, ThirdVal: 23 },
        { Country: "Spain", Amount: 11, SecondVal: 19, ThirdVal: 24 },
        { Country: "USA", Amount: 18, SecondVal: 8, ThirdVal: 21 }
    ];

    citas: {Citas: string, Cantidad: number }[] = [{
        Citas: "Citas de asistencia",
                Cantidad: 3
            },
            {
                Citas: "Citas perdidas",
                Cantidad: 1
            },
            {
                Citas: "Citas restantes",
                Cantidad: 8
            }
        ]



    constructor() {
        // Use the component constructor to inject providers.
                // Creating dummy events
                let events = [];
                let now = new Date();
                let startDate;
                let endDate;
                let colors = [new Color(200, 188, 26, 214), new Color(220, 255, 109, 130), new Color(255, 55, 45, 255), new Color(199, 17, 227, 10), new Color(255, 255, 54, 3)];
                for (let i = 1; i < 10; i++) {
                    startDate = new Date(now.getFullYear(), now.getMonth(), i * 2, 1);
                    endDate = new Date(now.getFullYear(), now.getMonth(), (i * 2), 3);
                    let event = new calendarModule.CalendarEvent("event " + i, startDate, endDate, false, colors[i * 10 % (colors.length - 1)]);
                    events.push(event);
                    if (i % 3 == 0) {
                        event = new calendarModule.CalendarEvent("second " + i, startDate, endDate, true, colors[i * 5 % (colors.length - 1)]);
                        events.push(event);
                    }
                }
                this.calendarEvents = events;
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onDateSelected(args) {
        console.log("onDateSelected: " + args.date);
    }

    onDateDeselected(args) {
        console.log("onDateDeselected: " + args.date);
    }

    onNavigatedToDate(args) {
        console.log("onNavigatedToDate: " + args.date);
    }

    onNavigatingToDateStarted(args) {
        console.log("onNavigatingToDateStarted: " + args.date);
    }

    onViewModeChanged(args) {
        console.log("onViewModeChanged: " + args.newValue);
    }
}
