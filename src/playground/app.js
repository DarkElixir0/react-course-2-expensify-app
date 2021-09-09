class Header extends React.Component{
    render(){
        const template = (
            <div>
                <h1>{this.props.title}</h1>
                <p>IMDB Ratings are Overrated</p>
            </div>
        );
        return template;
    }
}

class Action extends React.Component {

    
    render(){
        return (
            <div>
                <button disabled={this.props.hasOptions} onClick ={this.props.handlePick}>What should I do now</button>
                
            </div>
        );
    }
    
}

class AddOption extends React.Component{

    constructor(props){
        super(props);

        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.removeOption = this.removeOption.bind(this);

        this.state = {
            error : undefined
        }
        
    }

    onFormSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim(' ');
        let error = undefined;
        if(!option) error = "User did not Input Anything";
        //else if(this.props.options.indexOf(e.target.elements.option.value)) error="Option Already exists";
        else{
            this.props.addOption(option);
        }
        this.setState((prevState) =>{
            return {
                error : error
            };
        })
        e.target.elements.option.value=' ';
    }

    removeOption(option){
        console.log(option);
        this.props.removeOption(option);
    }

    render(){
        return (
            <div>
                <button onClick={this.props.removeAll}>Remove All</button>
                <ol>
                {this.props.options.map((option) => <Option option={option} removeOption = {this.removeOption} key={option}/>)}
                </ol>
                {this.state.error &&  <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

class Option extends React.Component{

    constructor(props){
        super(props);
        this.removeOption = this.removeOption.bind(this);
    }

    removeOption(){
        this.props.removeOption(this.props.option);
    }
    render(){
        return (
            <li>
                {this.props.option}
                {this.props.option && <button onClick = {this.removeOption}>Remove Option</button>}
            </li>
            
        );
    }
}

class IndecisionApp extends React.Component {

    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.addOption = this.addOption.bind(this);
        this.removeOption = this.removeOption.bind(this);
        this.state = {
            options:props.options
        }
    }

    componentDidMount(){
        console.log("Component rendered");

        try {
            const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options){
            this.setState((prevState) =>{
                return{
                    options : options
                };
            })
        }
        }
        catch(e){
            //Do notihing At All
        }
        
    }

    

    componentWillUnmount(){
        console.log("Component will unmount");
    }

    removeAll(){
        this.setState((prevState) =>{
            return {
                options:[]
            };
        })
    }

    handlePick(){
        let j = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[j];
        alert(option);
    }

    addOption(option){
        console.log(option);
        this.setState((prevState) =>{
            return {
                options : prevState.options.concat(option)
            };
        })
    }

    removeOption(option){
        this.setState((prevState) =>{
            
            return {
                options : prevState.options.filter((option1) =>{
                    if(option1==option)return false;
                    return true;
                })
            };
        })
    }

    componentDidUpdate(prevProps,prevState){
        
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options',json);
        
        console.log("Component UPDATED");
    }

    
   
    render(){
        
        return (
            <div>
                <Header title = "Lord Of The Rings"/>
                <Action hasOptions={this.state.options.length > 0? false:true}
                handlePick = {this.handlePick}/>
                <AddOption options={this.state.options}
                removeAll = {this.removeAll}
                addOption = {this.addOption}
                removeOption = {this.removeOption}
                />
            </div>
        );
    }
}


IndecisionApp.defaultProps = {
    options :[]
}


const User = (props) =>{
    return (
        <div>
            <h1>Name: {props.title}</h1>
            <p>Age: {props.age}</p>
        </div>
    );
};



ReactDOM.render(<IndecisionApp/>,document.getElementById("app"));
