import { Component, OnInit } from '@angular/core';
import {HeroesService} from "./heroes.service";


@Component({
    selector: 'app-heroes',
    template: `
    <p>
      heroes works!
    </p>
  `,
    styles: []
})
export class HeroesComponent implements OnInit {

    public heroes: any[] = [];
    public errors: string;

    constructor( public _heroesService: HeroesService ) { }

    ngOnInit() {
        this.getHeroes();
    }
    getHeroes() {
        this._heroesService.getHeroes()
            .subscribe( heroes => this.heroes = heroes );
    }

    addHeroe() {
        const heroe = { nombre: 'Médico Juan Carlos' };

        this._heroesService.addHeroe(heroe).subscribe(
            heroeDB => this.heroes.push(heroeDB),
                err => this.errors = err
            );
    }

    removeHeroe(id: string) {
        const popup = confirm('Estas seguro que desea borrar este heroe');

        if ( popup ) {
            this._heroesService.removeHeroe( id );
        }

    }

}
