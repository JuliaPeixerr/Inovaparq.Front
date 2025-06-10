import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SaveStartupDialog } from "src/app/project/dialogs/save-startup/save-startup.component";

@Component({
    selector: 'generic-header',
    templateUrl: './generic-header.component.html',
    styleUrls: ['./generic-header.component.scss']
})
export class GenericHeaderComponent {

    constructor(private modalService: NgbModal) { }

    save() {
        this.modalService.open(SaveStartupDialog, 
            { centered: true, size: 'lg' });
    }
}