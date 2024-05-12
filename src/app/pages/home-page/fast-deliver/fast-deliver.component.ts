import { Component } from '@angular/core';

interface EventItem {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}

@Component({
  selector: 'base-fast-deliver',
  templateUrl: './fast-deliver.component.html',
  styleUrl: './fast-deliver.component.scss'
})
export class FastDeliverComponent {

    events: EventItem[];

    orderingDate;
    processingDate;
    givePostDate;
    finishDate;

    constructor() {
        this.getDate();
        this.events = [
            { status: 'Megrendelés', date: this.orderingDate, icon: 'pi pi-shopping-cart', color: '#9C27B0' },
            { status: 'Feldolgozás', date: this.processingDate, icon: 'pi pi-cog', color: '#673AB7' },
            { status: 'Átadás a futárszolgálatnak', date: this.givePostDate, icon: 'pi pi-cog', color: '#673AB7' },
            { status: 'Kiszállítás', date: this.finishDate, icon: 'pi pi-check', color: '#607D8B' }
        ];
    }

    getDate(){
        const dateObj = new Date();
        const month   = dateObj.getUTCMonth() + 1;
        const day     = dateObj.getUTCDate();
        const year    = dateObj.getUTCFullYear();
        const day1 = dateObj.getUTCDate() + 1;

        const pMonth        = month.toString().padStart(2,"0");
        const pDay          = day.toString().padStart(2,"0");
        const pDay1          = day1.toString().padStart(2,"0");
        this.orderingDate = `${year}/${pMonth}/${pDay}`;
        this.processingDate = `${year}/${pMonth}/${pDay}`;
        this.givePostDate = `${year}/${pMonth}/${pDay1}`;
        this.finishDate = `${year}/${pMonth}/${pDay1}`;
    }





}
