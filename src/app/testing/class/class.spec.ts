

import {SuperHeroe} from "./class";

describe('testing class',() =>{

    it('should return 80 if take 20 damage', () => {

        let superHeroe = new SuperHeroe('Superman','fly');

        let life = superHeroe.takeDamage(20);
        expect(life).toBe(80);
    });

    it('should return 0 if receives more than 100 damage, unless Super Omar, he is immortal', () => {

        let superHeroe = new SuperHeroe('Superman','fly');
        let superOmar = new SuperHeroe('Super Omar','inmortal');

        let life = superHeroe.takeDamage(200);
        let lifeSuperOmar = superOmar.takeDamage(1000);
        expect(life).toBe(0);
        expect(lifeSuperOmar).toEqual('he is inmortal');
    });


});
