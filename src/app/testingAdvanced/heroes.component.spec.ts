import {HeroesComponent} from './heroes.component';
import {HeroesService} from './heroes.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

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


    it('Should call service when add heroe', () => {

        const heroes = ['superman', 'spiderman'];

        const spy = spyOn( service, 'addHeroe' ).and.callFake( (heroe) => {
            return Observable.empty();
        });

        component.addHeroe();

        expect( spy ).toHaveBeenCalled();
    });

    it('Should add heroe in array heroes', () => {

        const heroe = {id: 1, name: 'superman'};

        const spy = spyOn( service, 'addHeroe' ).and.returnValue( Observable.from([heroe]) );

        component.addHeroe();

        expect( component.heroes.indexOf(heroe) ).toBeGreaterThanOrEqual(0);
    });


    it('if addHeroe is fail, message should be equal to error ', () => {

        const error = 'No se pudo añadir un heroe';

        spyOn( service, 'addHeroe' ).and.returnValue( Observable.throw(error) );

        component.addHeroe();

        expect( component.errors ).toBe(error);
    });
});
