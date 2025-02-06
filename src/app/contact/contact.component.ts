import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DniComponent } from './dni/dni.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, DniComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, OnDestroy {

  // public user: any = {
  //   name: '',
  //   email: '',
  //   password: ''
  // }

  formularioContacto: FormGroup;
  tipoID: string = 'Identificación';
  //Objeto para mostrar datos estaticos en el formulario
  // usuarioActivo: any = {
  //   name: 'pedro',
  //   lastname: 'perez',
  //   phone: '95136985214'
  // };

  constructor(private form: FormBuilder){
    this.formularioContacto = this.form.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      tipoID: [''],
      
      phone: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required , Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {

    this.formularioContacto.get('tipoID')?.valueChanges.subscribe(value => {
      this.tipoID = value;
    })

    // this.formularioContacto.valueChanges.subscribe(value => {
    //   console.log(value);
    // })


    //Formas de validar y deshabilitar los campos de un formulario
    // this.formularioContacto.patchValue({
    //   name: this.usuarioActivo.name,
    //   lastName: this.usuarioActivo.lastname,
    //   phone: this.usuarioActivo.phone
    // })
    // this.formularioContacto.get('name')?.disable();
    // this.formularioContacto.get('lastName')?.disable();
    // this.formularioContacto.get('phone')?.disable();
  }

  ngOnDestroy(): void {
    console.log('Se destruyo el componente');
    
  }

  hasErrors(controlName: string, errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched;
  }

  enviar(){
    console.log(this.formularioContacto);
  }

}
