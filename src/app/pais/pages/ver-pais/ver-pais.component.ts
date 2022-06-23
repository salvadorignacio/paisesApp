import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;
  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService : PaisService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(( param ) => this.paisService.getPaisPorAlpha(param.id)),
      tap(console.log)
    )
    .subscribe(
      pais => {
        this.pais = pais[0];
      }
    )

    // otra forma de hacer lo mismo
    // this.activatedRoute.params.subscribe(
    //   params => {
    //     this.paisService.getPaisPorAlpha(params.id).subscribe(
    //       pais => {console.log(pais, 'salvaa');}
    //     )
    //   }
    // )
  }

}
