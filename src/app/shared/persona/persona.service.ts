import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { Persona } from "./persona.model"
import { throwError } from "rxjs";
@Injectable()
export class PersonaService {

    constructor(private http: HttpClient) {}

    load() {
        return this.http.get('http://192.140.25.7:9898/personas')
        .pipe(
            map((data: []) => {
                let personaLista = [];
                data.forEach((persona) => {
                    personaLista.push(new Persona( (<any>persona)._id, (<any>persona).nombre, (<any>persona).correo, (<any>persona).idCasa));
                });
                return personaLista;
            }),
            catchError(this.handleErrors)
        )
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error));
        return throwError(error);
    }
}
