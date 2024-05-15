import { Paciente } from "./paciente";

export class PacienteDetail extends Paciente{

    constructor(nombre: string, edad: number, diagnostico: string, historial: { fecha: string, sintomas: string }[]) {
        super(nombre, edad, diagnostico, historial);
    }
}
