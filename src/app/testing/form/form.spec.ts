
import {FormRegister} from "./form";
import {FormBuilder} from "@angular/forms";

describe( 'Form', () => {

    let component: FormRegister;

    beforeEach( () => {
       component = new FormRegister( new FormBuilder() );
    });

    it ('should create form with two inputs', () => {

        expect(component.form.contains('email')).toBeTruthy();
        expect(component.form.contains('password')).toBeTruthy();

    });

    it ('email is required', () => {

        const controler = component.form.get('email');
        controler.setValue('');
        expect (controler.valid).toBeFalsy();

    });

    it ('email should valid', () => {

        const controler = component.form.get('email');
        controler.setValue('pepe@gmail.com');
        expect (controler.valid).toBeTruthy();

    });


});