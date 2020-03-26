import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { Paciente } from "./paciente.model";
import { throwError } from "rxjs";

@Injectable()
export class PacienteService {

    constructor(private http: HttpClient) {}

    obtenerPacientes() {
        return this.http.get('http://192.140.25.7:8080/paciente')
        .pipe(
            map((data: []) => {
                let listaPaciente = [];
                data.forEach((paciente) => {
                    listaPaciente.push(new Paciente(
                        (<any>paciente).idPaciente,
                        (<any>paciente).nombrePaciente,
                        (<any>paciente).apellidoPaciente,
                        (<any>paciente).edadPaciente,
                        (<any>paciente).numero_expediente,
                        (<any>paciente).usuarioAppMovil
                    ));
                });
                return listaPaciente
            })         ,
            catchError(this.handleErrors)
        )
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error));
        return throwError(error);
    }

}
