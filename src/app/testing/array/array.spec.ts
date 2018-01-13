import {getSuperHeroes} from "./array";

describe('testing arrays', () => {

    it ('should return at least 3 Super Heroes', () => {

        const heroes = getSuperHeroes();
        expect(heroes.length).toBeGreaterThanOrEqual(3);

    });

    it ('should come Super Omar, because is the best super heroe in the world', () => {

        const heroes = getSuperHeroes();
        expect(heroes).toContain('Super Omar');

    });
});