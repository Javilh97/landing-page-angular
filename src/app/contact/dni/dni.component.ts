import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'dni-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dni.component.html',
  styleUrl: './dni.component.css'
})
export class DniComponent implements OnChanges{

  @Input() tipoID: string = 'Identificación';
  formularioDocumento: FormGroup;
    
    //Objeto para mostrar datos estaticos en el formulario
    // usuarioActivo: any = {
    //   name: 'pedro',
    //   lastname: 'perez',
    //   phone: '95136985214'
    // };
  
  constructor(private form: FormBuilder) {
    this.formularioDocumento = this.form.group({
      ide: [''],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes?.['tipoID'].currentValue);
    
  }

  hasErrors(controlName: string, errorType: string){
    return this.formularioDocumento.get(controlName)?.hasError(errorType) && this.formularioDocumento.get(controlName)?.touched;
  }

}
