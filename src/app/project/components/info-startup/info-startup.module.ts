import { NgModule } from "@angular/core";
import { InfoStartupComponent } from "./info-startup.component";
import { CommonModule } from "@angular/common";
import { GenericHeaderComponentModule } from "../shared";
import { RouterModule } from "@angular/router";
import { SaveStartupDialogModule } from "../../dialogs";

@NgModule({
    declarations: [InfoStartupComponent],
    exports: [InfoStartupComponent],
    imports: [
        CommonModule,
        GenericHeaderComponentModule,
        RouterModule,
        SaveStartupDialogModule
    ]
})
export class InfoStartupComponentModule { }