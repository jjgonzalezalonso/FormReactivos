import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent  implements OnInit{
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({nombre:'RTX 4090', precio: 3000, existencias:5 })
  }
  
  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]]
  })

  campoNoEsValido(campo: string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  guardar(){
    if (this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched(); //marca todos los campos como tocados
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset(); // borro todos los campos del formulario
  }


  /*   miFormulario: FormGroup = new FormGroup({
      nombre: new FormControl('RTX4080ti'),
      precio: new FormControl(1500),
      existencias: new FormControl(5)
    }) */


}
