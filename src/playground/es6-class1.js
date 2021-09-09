class Person {
    constructor(name) {
        this.name = name;
    };
    welcome(){
        return `Hii, my name is ${ this.name }`;
    }
}

class Student extends Person {
    constructor(name,school='not applicable'){
        super(name);
        this.school = school;
    }
    getSchoolName(){
        return this.school;
    }
}

class Traveler extends Person {
    constructor(name,homeLocation){
        super(name);
        this.homeLocation = homeLocation;
    }
    welcome(){
        let messege = super.welcome();
        if(this.homeLocation){
            messege+=`and I am From ${this.homeLocation}`;
        }
        return messege;
    }
}

const i = new Student("Ayush Mhaske","BITS");

const j = new Traveler("Ayush Mhaske","Sangamner");
const k = new Traveler("hritik");

//console.log(i.welcome());
//console.log(i.getSchoolName());
console.log(j.welcome(),k.welcome());