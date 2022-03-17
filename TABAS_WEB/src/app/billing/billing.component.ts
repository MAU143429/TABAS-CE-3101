import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public downloadBaggageReport(): void {
    const doc = new jsPDF();

    doc.text('REPORTE DE EQUIPAJE!', 70, 50);
    doc.save('reporte-maletas-por-clientes.pdf');
  }
}
