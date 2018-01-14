import {Heroe} from "./heroe";

describe('testing event Emitter',() =>{

    let superHeroe: Heroe;

    beforeEach( () => superHeroe = new Heroe('Superman', 'fly'));


    it('should event emitt  when take damage', () => {

        let newLife = 0;

        superHeroe.lifeEmit.subscribe( life => {
            newLife = life;
        });

        superHeroe.takeDamage(1000);
        expect(newLife).toBe(0);
    });



});
