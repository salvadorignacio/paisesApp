import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent{

  regiones: string [] = ['africa', 'america', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor( private paisService: PaisService) { }


  activarRegion (region:string) {
    if (this.regionActiva === region) {return;}
    this.regionActiva = region ;
    this.paisService.getPaisPorRegion(this.regionActiva).subscribe(paises => {
      this.paises = paises;
   });
  }
  getClaseCSS (region: string): string{
    return (region === this.regionActiva ? 'btn btn-primary' : 'btn btn-outline-primary');
  }
}
