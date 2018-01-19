import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class HeroesService {

    constructor( public http: HttpClient ) { }

    getHeroes() {
        return this.http.get('...')
            .map( resp => resp['heroe'] );
    }

    addHeroe( heroe: any ) {
        return this.http.post('...', heroe )
            .map( resp => resp['heroe'] );
    }

    removeHeroe( id: string ) {
        return this.http.delete('...' )
            .map( resp => resp['heroe'] );
    }


}
