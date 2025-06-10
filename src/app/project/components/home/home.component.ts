import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    columns: any[] = [1,2,3,4];
    cards: any[] = [1,2,3,4];

    constructor(
        private router: Router
    ) { }

    openCard(card: any) {
        console.log('openning card', card);
        this.router.navigate(['/startup']);
    }
}