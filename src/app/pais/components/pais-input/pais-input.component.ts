import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime} from 'rxjs/operators'

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  
  debouncer: Subject<string> = new Subject();
  
  termino: string = '';
  
  ngOnInit() {
    this.debouncer // Se ejecuta por cada tecla que se presiona
    .pipe(
      debounceTime(300) // emite el subscribe cuando pasan 300 milesimas despues de haber dejado de escribir
    )
    .subscribe(valor => {
      this.onDebounce.emit(valor);
    });
  }
  buscar() {
    this.onEnter.emit(this.termino); 
  }

  teclaPresionada(){
    this.debouncer.next(this.termino);
  }

}
