import { Injectable } from "@angular/core";


@Injectable()
export class TerapiaService {

    constructor() {}



    /*load() {
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
*/

}
