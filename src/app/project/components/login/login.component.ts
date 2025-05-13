import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UsuarioService } from "../../core";
import { catchError, throwError } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    nome: string = '';
    senha: string = '';

    constructor(
      private router: Router,
      private service: UsuarioService,
      private notification: ToastrService
    ) { }

    login() {
      this.service.login({
        nome: this.nome,
        senha: this.senha
      }).subscribe(() => {
        this.notification.success('Usuário logado com sucesso');
        this.router.navigate(['/home']);
      });
    }
}