console.log("This is Ayush");

let par={
    t:"The Lord Of The Rings",
    p:"Tolekin",
    options:["Return Of The King","Rise Of An Empire"]
};

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    const option = e.target.elements.option.value;
    if(option){
        par.options.push(option);
        e.target.elements.option.value="";
    }
    firseRender();
};


const buttonExist = () =>{
    if(par.options.length==0)return true;
    return false;
};
const firseRender = () =>{
    const template = (
        <div>
           <h1>{par.t}</h1>
           {par.p && <p>{par.p}</p>}
           <p>{par.options.length > 0? "Here are your options" : "No options available"}</p>
           <p>{par.options.length}</p>
           <button disabled = {buttonExist()}
           onClick={() =>{
               const rindex = Math.floor(Math.random()*par.options.length);
               const option = par.options[rindex];
               alert(option);
           }}>Pick a Random option</button>
           <button onClick={() =>{
               par.options=[];
               firseRender();
           }}>Remove All</button>
           <ol>
               {par.options.map((option) => <li key={option}>{option}</li>)}
           </ol>
           <form onSubmit={onFormSubmit}>
               <input name="option"></input>
               <button>Add Option</button>
           </form>
        </div>
       );
    ReactDOM.render(template,appRoot);
};


let user = {
    name: 'Ayush Mhaske',
    age:20,
    location:"Sangamner",
    optional:"react.js"
};

function getLocation(user){
    if(user.location)return user.location;
    return "Unknown";
}

function getOptional(user){
    if(user.optional)return <p>Optional: {user.optional}</p>;
}

const templateTwo = (
    <div>
        <h1>
            {user.name? user.name.toUpperCase():"Unknown"}
        </h1>
        <p>
            Age: {user.age}
        </p>
        <p>
            Location: {getLocation(user)}
        </p>
        {getOptional(user)}
    </div>
);

let count=0;



const templateThree = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() =>{count++}}>+1</button>
        <button onClick ={() =>{
            count--;
            console.log("Minus 1")
        }}>-1</button>
        <button onClick={() =>{
            count=0;
            console.log("Reset");
        }}>Reset</button>
    </div>
);
var appRoot = document.getElementById('app');

const renderCounterApp = () =>{
    const templateFour = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() =>{count++;renderCounterApp();}}>+1</button>
            <button onClick ={() =>{
                count--;
                renderCounterApp();
                console.log("Minus 1")
            }}>-1</button>
            <button onClick={() =>{
                count=0;
                renderCounterApp();
                console.log("Reset");
            }}>Reset</button>
        </div>
    );
    //ReactDOM.render(templateFour,appRoot);
};

//renderCounterApp();
//ReactDOM.render(template,appRoot);

let buttonString = "Show details";
let flag=0;
let buttonClicked = 0;

const againRender = () =>{
    const challenge = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={() =>{
                if(flag==0){
                    flag=1;
                    buttonString="Hide details";
                }
                else{
                    flag=0;
                    buttonString="Show details";
                }
                againRender();
            }}>{buttonString}</button>
            {flag==1 && <p>Hii Usser. Nice To Meet You</p>}
        </div>
    );
    //ReactDOM.render(challenge,appRoot);
};


firseRender();





//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
