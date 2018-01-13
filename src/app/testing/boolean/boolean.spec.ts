
import {isFalse, isTrue} from "./boolean";

describe('testing boolean', () => {
   it('should return true', () => {

       const res = isTrue();
       expect(res).toBeTruthy();

   });


    it('should return true', () => {

        const res = isFalse();
        expect(res).toBeFalsy();

    });
});