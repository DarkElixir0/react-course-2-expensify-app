class Counter extends React.Component {

    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count : 0
        }
    }

    addOne(){
        console.log("1");
        this.setState((prevState) =>{
            
            return {
                count:prevState.count+1
            }
        });
        
    }

    minusOne(){
        console.log(this.state.count);
        
        this.setState((prevState) =>{
            
            return {
                count:this.state.count-1
            }
        });
    }

    reset(){ 
        console.log("0");
        this.setState((prevState) =>{
            
            return {
                count:0
            }
        });
    }


    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    }
}



class VisibilityToggle extends React.Component {

    constructor(props){
        super(props);
        this.buttonClicked = this.buttonClicked.bind(this)
        this.state = {
            flag : 0
        }
        
    }

    buttonClicked(){
        if(this.state.flag==0){
            this.setState((prevState) =>{
                return {
                    flag :1
                    
                }
            })
        }
        else{
            this.setState((prevState) =>{
                return {
                    flag :0
                }
            })
        }
    }

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.buttonClicked}>{this.state.flag?"Hide Details":"Show Details"}</button>
                {this.state.flag? <p>Ronaldo breaks another record</p>:null}
            </div>
        );
    }
}



class OneCounter extends React.Component {
    constructor(props){
        super(props);
        this.plusOne = this.plusOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);

        this.state = {
            count : 0
        }
    }

    componentDidMount(){
        console.log("Did Mount");
        const countString = localStorage.getItem('count');
        const countInteger = parseInt(countString,10);
        //if(countInteger==NaN)countInteger=0;
        if(!isNaN(countInteger)){
            this.setState((prevState) =>{
                return {
                    count : countInteger
                }
            })
        }
        
    }

    componentDidUpdate(){
        //console.log("Did Update");
        const countString = this.state.count.toString();
        console.log(countString);
        localStorage.setItem('count',countString);
    }

    plusOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count +1
            }
        })
    }

    minusOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count -1
            }
        })
    }

    reset(){
        this.setState((prevState)=>{
            return {
                count: 0
            }
        })
    }

    render(){
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.plusOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}
ReactDOM.render(<OneCounter/>,document.getElementById('app'));