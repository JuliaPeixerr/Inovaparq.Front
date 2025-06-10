import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'generic-header',
    templateUrl: './generic-header.component.html',
    styleUrls: ['./generic-header.component.scss']
})
export class GenericHeaderComponent {

    constructor(
        private modalService: NgbModal,
        private router: Router
    ) { }

    save() {

    }

    backHome() {
        this.router.navigate(['/home']);
    }
}