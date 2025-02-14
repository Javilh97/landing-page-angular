import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';

interface temperatures {
    value: string,
    viewValue: string
}

@Component({
  selector: 'app-temperature-converter',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, FormsModule, MatInputModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, CommonModule],
  templateUrl: './temperature-converter.component.html',
  styleUrl: './temperature-converter.component.css'
})
export class TemperatureConverterComponent{
  validForm!: FormGroup;
  result!: number;
  temperatura!: number;
  de: string  = '';
  a: string = '';

  temperaturas: temperatures[] = [
    {value: 'Fahrenheit', viewValue: 'Fahrenheit'},
    {value: 'Celsius', viewValue: 'Celsius'},
    {value: 'Kelvin', viewValue: 'Kelvin'}
  ] 

  constructor(
    private fb: FormBuilder
  ){
    this.validForm = this.fb.group({
      valor: ['', Validators.required],
      de: ['', Validators.required],
      a: ['', Validators.required]
    })
  }

  submit() {
    if (this.validForm.valid) {
      this.temperatura = this.validForm.value.valor;
      this.de = this.validForm.value.de;
      this.a = this.validForm.value.a;
    }
    this.convertir(this.temperatura, this.de, this.a);
  }

  convertir(temperatura: number, de: string, a:string){

    if(de === a){
      this.result = temperatura;
    }
    
    if(de === 'Fahrenheit'){
      if(a === 'Celsius'){
        this.result = Math.round(((temperatura - 32) * 5/9) * 100) / 100;
      } else if (a === 'Kelvin') {
        this.result = Math.round((((temperatura - 32) * 5/9) + 273.15) * 100) / 100;
      }
    }

    if(de === 'Celsius'){
      if(a === 'Fahrenheit'){
        this.result = (9/5 * temperatura) + 32;
      } else if (a === 'Kelvin') {
        this.result = Number(temperatura) + 273.15;
      }
    }

    if(de === 'Kelvin'){
      if(a === 'Fahrenheit'){
        this.result = Math.round((((temperatura - 273.15)* 9/5) + 32) * 100) / 100;
      } else if (a === 'Celsius') {
        this.result = Math.round((temperatura - 273.15) * 100) / 100;
      }
    }
  }
}
