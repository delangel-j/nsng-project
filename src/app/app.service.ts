import { Injectable } from "@angular/core";
import { HttpClient } from '@Angular/common/http';
import { BehaviorSubject } from "rxjs";
import { user } from "./app.model";
import { tap } from "rxjs/operators";
@Injectable({providedIn: 'root'})
export class AppService {
    private _currentProgreso = new BehaviorSubject<user>(null);

    constructor(private http: HttpClient) {}

    fetchProgresoPaciente() {
        return this.http.get<{
            id: number,
            nombre: string,
            correo: string,
            idCasa: number
        }>('http://192.140.25.7:9898/personas')
        .pipe(
            tap(resData => {
                if(resData){
                const loadedProgreso = new user(

                );
                this._currentProgreso.next(loadedProgreso);
                }
            })
        )
    }
}
