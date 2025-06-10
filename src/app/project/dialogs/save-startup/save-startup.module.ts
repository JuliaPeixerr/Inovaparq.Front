import { NgModule } from '@angular/core';
import { SaveStartupDialog } from './save-startup.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [SaveStartupDialog],
    exports: [SaveStartupDialog],
    imports: [
        CommonModule,

    ]
})
export class SaveStartupDialogModule { }