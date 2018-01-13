import { text } from "./string";

describe('Test string', () =>{

    it('should be string', () =>{
        const resp = text('test');
        expect( typeof resp).toBe('string');
    });

    it('should be return Super Omar', () =>{

        const resp = text('Super Omar');
        expect(resp).toContain('Super Omar');
    });

});