import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';


@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {
  pacientes: Array<Paciente>= [];
  numeroMenores: number = 0;
  selected: boolean = false;  
  selectedPaciente!: Paciente;
  constructor(private pacienteService: PacienteService) {}

  ngOnInit(): void {
      this.getPacientes();
  }

  getPacientes(): void {
      this.pacienteService.getPacientes()
          .subscribe(pacientes => this.pacientes = pacientes);
  }
  contarMenores(): void {
    this.numeroMenores = this.pacientes.filter(paciente => paciente.edad < 18).length;
  }
  onSelect(paciente: Paciente): void {
    this.selectedPaciente = paciente;
    this.selected = true;

  }
}