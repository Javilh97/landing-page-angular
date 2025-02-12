import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

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
export class TemperatureConverterComponent {
  value: string = '';
  validForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder
  ){
    this.validForm = this.fb.group({

    })

  }

  temperaturas: temperatures[] = [
    {value: 'Fahrenheit', viewValue: 'Fahrenheit'},
    {value: 'Celsius', viewValue: 'Celsius'},
    {value: 'Kelvin', viewValue: 'Kelvin'}
  ] 

  submit(){

  }


}
