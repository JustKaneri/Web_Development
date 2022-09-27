import React from "react";

class ClassCounter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count: 0
        }

        this.Add = this.Add.bind(this);
        this.Del = this.Del.bind(this);
    }

    Add(){
        this.setState({count: this.state.count + 1});
    }
    
    Del(){
        this.setState({count: this.state.count - 1});
    }


    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.Add}>Add</button>
                <button onClick={this.Del}>Del</button>
            </div>
        )
    }
}

export default ClassCounter;