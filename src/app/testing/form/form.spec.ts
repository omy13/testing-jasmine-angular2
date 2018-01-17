
import {FormRegister} from "./form";
import {FormBuilder} from "@angular/forms";

describe( 'Form', () => {

    let component: FormRegister;

    beforeEach( () => {
       component = new FormRegister( new FormBuilder());
    });

    it ('should create form with two inputs', () => {

        expect(component.form.contains('email')).toBeTruthy();
        expect(component.form.contains('password')).toBeTruthy();

    });



});