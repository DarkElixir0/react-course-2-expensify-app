const person = {
    name:"Ayush",
    age:20,
    location:{
        place:"Sangamner",
        temp:92
    }

};

const {name} = person;
console.log(`hii, my name is ${name}`);

const {place,temp:temperature} = person.location;

console.log(`I am from ${place} and temperature is ${temperature}`);

const item = ["pizza","burger","roll","nachos"];

const [pizza, , roll] = item;

console.log(pizza,roll);
