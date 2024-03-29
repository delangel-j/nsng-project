import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { PlanTrabajo } from "./plan-trabajo.model";
import { throwError } from "rxjs";

@Injectable()
export class PlanTrabajoService {

    constructor(private http: HttpClient) {}

    obtenerPlanTrabajo() {
        return this.http.get('http://192.140.25.7:8080/api/plan_trabajo/paciente/1')
        .pipe(
            map((data: []) => {
                let listaPlanTrabajo = [];
                data.forEach((plan_trabajo) => {
                    listaPlanTrabajo.push(new PlanTrabajo(
                        (<any>plan_trabajo).idPlanTrabajo,
                        (<any>plan_trabajo).idPaciente,
                        (<any>plan_trabajo).fechaPlanTrabajo,
                        (<any>plan_trabajo).estadoPlanTrabajo,
                        (<any>plan_trabajo).indicacionesProcedimiento,
                        (<any>plan_trabajo).numeroSesiones,
                        (<any>plan_trabajo).numeroBloque,
                        (<any>plan_trabajo).temporalidad
                    ));
                });
                return listaPlanTrabajo
            }),
            catchError(this.handleErrors)
        )
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error));
        return throwError(error);
    }

}
