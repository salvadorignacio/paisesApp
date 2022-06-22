import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from "rxjs/operators";

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService : PaisService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(( param ) => this.paisService.getPaisPorAlpha(param.id))
    )
    .subscribe(
      resp => {
        console.log(resp, 'salvaa');
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
