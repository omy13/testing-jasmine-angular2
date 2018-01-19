import {HeroesComponent} from './heroes.component';
import {HeroesService} from './heroes.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';

describe('Testing component heroe', () => {

    let component: HeroesComponent;
    const service = new HeroesService(null);

    beforeEach( () => {
        component = new HeroesComponent(service);
    });


    it('Init should get Heroes', () => {

        const heroes = ['superman', 'spiderman'];

        spyOn( service, 'getHeroes' ).and.callFake( () => {
            return Observable.from( [ heroes ] );
        });

        component.ngOnInit();

        expect( component.heroes.length ).toBeGreaterThan(0);
    });


});
