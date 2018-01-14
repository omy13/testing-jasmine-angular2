import {EventEmitter} from "@angular/core";

export class Heroe {

    name: string;
    powers: string;
    life: number = 100;
    lifeEmit= new EventEmitter<number>();


    constructor(name:string, powers: string){

        this.name = name;
        this.powers = powers;

    }

    takeDamage( damage: number ){

        if ( damage >= this.life) {
            this.life = 0;
        }else{
            this.life = this.life - damage;
        }

        if (this.name == 'Super Omar'){
            return 'he is inmortal';
        }else{
            this.lifeEmit.emit(this.life);
        }



    }
}