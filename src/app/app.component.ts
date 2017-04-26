import { Component, OnInit} from '@angular/core';
import { SalesService, Sale } from './services/sales.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    salesTotal:Sale[] = [];
    salesDate:Sale[] = [];
    constructor( private _salesService:SalesService) {
    }
    ngOnInit() {
        this.salesTotal = this._salesService.getSales();
        this.salesDate = this._salesService.getSales().slice();
    }
}
