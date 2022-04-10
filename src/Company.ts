import { rand, randAbbreviation, randCompanyName } from "@ngneat/falso";
import { Mappable } from "./CustomMap";
export default class Company  implements Mappable{
    name:string;

    catchPhrase: string;
    color: string;
    location: {
        lat:number,
        lng:number
    };

    constructor(){
        this.name = randCompanyName();
        this.catchPhrase = randCompanyName().concat(randAbbreviation());
    }

    markerContent(): string {
        return 'company mapper content';
    }
}