import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DniComponent } from './dni/dni.component';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import {MatDatepicker, MatDatepickerModule, MatDatepickerToggle} from '@angular/material/datepicker';
import { MatInput, MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, DniComponent, MatFormField, MatLabel, MatOption, MatDatepicker, MatDatepickerToggle, MatInput, MatFormField, MatInputModule, MatFormFieldModule, MatDatepickerModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, OnDestroy {

  // public user: any = {
  //   name: '',
  //   email: '',
  //   password: ''
  // }

  tramiteForm: FormGroup;
  tiposTramite = ['Alta', 'Baja', 'Modificación'];

  formularioContacto: FormGroup;
  tipoID: string = 'Identificación';
  //Objeto para mostrar datos estaticos en el formulario
  // usuarioActivo: any = {
  //   name: 'pedro',
  //   lastname: 'perez',
  //   phone: '95136985214'
  // };

  constructor(private fb: FormBuilder){
    this.formularioContacto = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      tipoID: [''],
      
      phone: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required , Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.tramiteForm = this.fb.group({
      numeroSerie: ['', Validators.required],
      contribuyente: this.fb.group({
        nombre: ['', Validators.required],
        apellidoPaterno: ['', Validators.required],
        apellidoMaterno: [''],
        razonSocial: [''],
        rfc: ['', [Validators.required, Validators.pattern('^[A-Z0-9]{12,13}$')]],
        tipoPersona: ['', Validators.required]
      }),
      representante: this.fb.group({
        nombre: ['', Validators.required],
        apellidoPaterno: ['', Validators.required],
        apellidoMaterno: [''],
        tipoPersona: ['']
      }),
      fechaElaboracion: ['', Validators.required],
      tipoTramite: ['', Validators.required],
      archivoPdf: [null, Validators.required]
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

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.tramiteForm.patchValue({ archivoPdf: file });
    }
  }

  submitForm() {
    if (this.tramiteForm.valid) {
      console.log('Formulario enviado:', this.tramiteForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }

}


// Creame un formulario con angular y angular material donde se puedan ingresar los siguientes datos,
// toma en cuenta que cada campo esta representado con un guion

//  - Numero de serie
// Datos del contribuyente
//  - nombre
//  - apellido paterno
//  - apellido materno (opcional)
//  - razon social(null si es persona fisica)
//  - rfc
//  - tipo de persona (fisica o moral)

// Datos del representante
//  - nombre
//  - apellido paterno
//  - apellido materno (opcional)
//  - tipo de persona (opcional)

//  - Date picker para selecionar fecha de elaboracion

//  - select para tipo de tramite

//  - input de tipo file para subir el archivo pdf


// ////////////////////////////////////////// endpoints para recapo //////////////////////////////////////
// url base = http://172.80.13.12:8080/api/

// ###### tipos de tramite

// {
//   "GET api/tipo_tramite/{id}": "Busca tipos de tramite por id.",
//   "GET api/tipo_tramite": "Listado de tipos de tramite",
//   "POST api/tipo_tramite": "Crea un tipo de tramite, la informacion se manda en el body",
//   "PUT api/tipo_tramite/{id}": "Activa/desactiva un tipo de tramite"
// }

// ###### Contribuyente

// {
//   "GET api/contribuyente": "Listado de todos los contribuyentes",
//   "GET api/contribuyente/{id}": "Busca contribuyente por id.",
//   "POST api/contribuyente": "Crea un contribuyente, la informacion se manda en el body"
// }

// ###### Representante

// {
//   "GET api/representante": "Listado de todos los representantes",
//   "POST api/representante": "Crea un representante, la informacion se manda en el body",
//   "GET api/representante/{id}": "Busca representante por id."
// }

// ###### Carta Poder

// {
//   "GET api/cartaPoder/f/id_file": "Listado de la cartas poder por id del file",
//   "POST api/cartaPoder": "Crea una carta poder, la informacion se manda en el body",
//   "GET api/cartaPoder/{id}": "Busca una carta poder por id.",
//   "GET api/cartaPoder": "Listado de todas las cartas poder"
// }

// ###### Archivos

// {
//   "GET api/file/s/{id_serie}": "Busca por el id de serie",
//   "POST api/file/upload": "Crea un registro file",
//   "GET api/file/{id}": "Busca file por id.",
//   "GET api/file/download/{id}": "visualizar archivo",
//   "GET api/file/report": "reporte personalizado"
// }

// ###### Series

// {
//   "POST api/series": "Crea un numero de Serie",
//   "GET api/series/s/{serie}": "Busca por series",
//   "GET api/series/{id}": "Busca series por id."
// }




