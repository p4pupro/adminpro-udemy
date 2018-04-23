import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtPrgoress') textProgress: ElementRef;

  @Input() progreso: number = 50;
  @Input('nombre') leyenda: string = 'Leyenda';

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  deshabilitarbotonadd: boolean = false;
  deshabilitarbotonrem: boolean = false;
 

  constructor() {
 
  }

  ngOnInit() {
    
  }

  onChanges(newValue: number) {

    if(newValue >= 100) {
      this.progreso = 100;
    }else if(newValue <= 0) {
      this.progreso = 0;
    } else {
       this.progreso = newValue;
    }
    this.textProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
    this.textProgress.nativeElement.focus();
  }

  cambiarValor(valor) {
    if(this.progreso >= 100) {
      this.deshabilitarbotonadd = true;
      if(valor < 0){
        this.progreso = this.progreso + valor; 
      }
    }else if(this.progreso <= 0) {
      this.deshabilitarbotonrem = true;
      if(valor > 0){
        this.progreso = this.progreso + valor; 
      }
    } else {
      this.progreso = this.progreso + valor; 
      this.cambioValor.emit(this.progreso);
    } 
  }

}
