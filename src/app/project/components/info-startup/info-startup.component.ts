import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { SaveStartupDialog } from "../../dialogs";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'info-startup-component',
    templateUrl: './info-startup.component.html',
    styleUrls: ['./info-startup.component.scss']
})
export class InfoStartupComponent {
    abas: string[] = [
        'Dados da Startup',
        'Pagamento',
        'Documentos',
        'Atas de reunião',
        'Convênio técnico'
    ];
    tabSelected: number = 0;

    constructor(
        private router: Router,
        private modalService: NgbModal
    ) { }

    changeTab(i: number) {
        this.tabSelected = i;
    }

    backHome() {
        this.router.navigate(['/home']);
    }

    edit() {
        this.modalService.open(SaveStartupDialog,
            { centered: true, size: 'lg' });
    }
}