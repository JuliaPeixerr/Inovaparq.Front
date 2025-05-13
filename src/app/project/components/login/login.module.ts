import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { UsuarioServiceModule } from "../../core";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { FormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";

@NgModule({
    declarations: [LoginComponent],
    exports: [LoginComponent],
    imports: [
        CommonModule,
        RouterModule,
        UsuarioServiceModule,
        MatSnackBarModule,
        FormsModule,
        ToastrModule
    ]
})
export class LoginComponentModule { }