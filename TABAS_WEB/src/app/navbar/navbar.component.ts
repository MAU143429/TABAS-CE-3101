import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public downloadBaggageReport(): void {
    const doc = new jsPDF();

    doc.text('REPORTE DE EQUIPAJE!', 70, 50);
    doc.save('reporte-maletas-por-clientes.pdf');
  }

  public downloadGeneralReport(): void {
    const doc2 = new jsPDF();

    doc2.text('REPORTE DE GENERAL!', 70, 50);
    doc2.save('reporte-conciliacion.pdf');
  }

}
