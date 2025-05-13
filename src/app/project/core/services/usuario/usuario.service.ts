import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginCommand, Usuario } from "../../domain";
import { Observable } from "rxjs";
import { APIURL } from "../connection-string";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private http: HttpClient) { }

    login(command: LoginCommand): Observable<Usuario> {
        var url = "/usuario/login";
        return this.http.post<Usuario>(APIURL + url, command);
    }
}