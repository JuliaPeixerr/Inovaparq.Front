import { NgModule } from "@angular/core";
import { GenericHeaderComponent } from "./generic-header.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [GenericHeaderComponent],
    exports: [GenericHeaderComponent],
    imports: [
        CommonModule,
    ]
})
export class GenericHeaderComponentModule { }