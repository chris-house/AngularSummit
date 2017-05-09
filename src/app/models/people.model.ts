export class Person {
    first: string;
    last: string;
    ssn: string;
    birthDate: Date;
    gender: string;
    constructor() {
        this.first = '';
        this.last = '';
        this.ssn = '';
        this.birthDate = new Date();
        this.gender = '';
    }
}
