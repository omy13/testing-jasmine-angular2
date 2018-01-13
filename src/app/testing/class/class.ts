export class SuperHeroe {

    name: string;
    powers: string;
    life: number = 100;


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
            return this.life;
        }



    }
}