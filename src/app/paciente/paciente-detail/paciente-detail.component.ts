import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente-detail',
  templateUrl: './paciente-detail.component.html',
  styleUrls: ['./paciente-detail.component.css']
})
export class PacienteDetailComponent implements OnInit {
paciente: any;

  constructor() { }

  ngOnInit() {
  }

}
