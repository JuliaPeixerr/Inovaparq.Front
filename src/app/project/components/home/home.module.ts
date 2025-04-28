import { GenericHeaderComponentModule } from "../shared/generic-header/generic-header.module";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [HomeComponent],
    exports: [HomeComponent],
    imports: [
        CommonModule,
        RouterModule,
        GenericHeaderComponentModule
    ]
})
export class HomeComponentModule { }