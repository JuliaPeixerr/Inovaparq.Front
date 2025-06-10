import { Component } from "@angular/core";

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    columns: any[] = [1,2,3,4];
    cards: any[] = [1,2,3,4];

    constructor() { }

    openCard(card: any) {
        console.log('openning card', card);
    }
}