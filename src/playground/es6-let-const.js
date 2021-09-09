var nameVar = "Ayush Mhaske";

//Block scoping
if(nameVar){
    let firstName = nameVar.split(' ')[0];
}

let firstName = (x) => x.split(' ')[0]; 
console.log('nameVar',firstName(nameVar));

const multiplier = {
    numbers: [1,2,3,4,5,6,7],
    multiplyBy: 10,
    ans(){
        var prod = this.numbers.map((number) =>{
            return number*this.multiplyBy;
        });
        return prod;
    }
};

console.log(multiplier.ans());