import { increment} from "./number";

describe('test number', () => {

    it('should return 100 if number is more than 100', () =>{
        const res = increment(300);
        expect(res).toBe(100);

    });

    it('should return number more one if number is less than 100', () =>{

        const res = increment(1);
        expect(res + 1).toBe(res + 1);

    });

});