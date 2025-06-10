import { NgModule } from "@angular/core";
import { GenericHeaderComponent } from "./generic-header.component";
import { CommonModule } from "@angular/common";
import { SaveStartupDialogModule } from "src/app/project/dialogs/save-startup/save-startup.module";


@NgModule({
    declarations: [GenericHeaderComponent],
    exports: [GenericHeaderComponent],
    imports: [
        CommonModule,
        SaveStartupDialogModule
    ]
})
export class GenericHeaderComponentModule { }