import { Injectable } from '@angular/core';
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class BaseToastService {

    constructor(private messageService: MessageService) {}

    success(title: string, detail: string, lifeinms?: number) {
        this.messageService.add({ severity: 'success', summary: title, detail: detail, life: lifeinms });
    }

    info(title: string, detail: string, lifeinms?: number) {
        this.messageService.add({ severity: 'info', summary: title, detail: detail, life: lifeinms });
    }

    warn(title: string, detail: string, lifeinms?: number) {
        this.messageService.add({ severity: 'warn', summary: title, detail: detail, life: lifeinms });
    }

    error(title: string, detail: string, lifeinms?: number) {
        this.messageService.add({ severity: 'error', summary: title, detail: detail, life: lifeinms });
    }
}
