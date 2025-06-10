import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'save-startup-component',
    templateUrl: './save-startup.component.html',
    styleUrls: ['./save-startup.component.scss']
})
export class SaveStartupDialog implements OnInit {
    @ViewChild('closeButton') closeButton!: ElementRef<HTMLButtonElement>;
    grupos: string[] = ['CAUSE', 'CRIATE', 'CENTRA', 'NANOTECH'];

    constructor(public activeModal: NgbActiveModal) { }

    ngOnInit(): void {
    }

    salvar() {
        this.activeModal.close();
    }

}