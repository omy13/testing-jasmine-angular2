import { text } from "./string";

describe('Test string', () =>{
    it('should be string', () =>{
        const resp = text('test');
        expect( typeof resp).toBe('string');
    });
});