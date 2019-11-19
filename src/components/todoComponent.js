import React , { Component } from "react";

class TodoComponent extends Component{
    constructor(){
        super();
        this.state = {
            title:"Demo App"
        }
    }

    render() {
        return (
            <div>
                <h1>Hello from {this.state.title} </h1>
            </div>
        )
    }

}

export default TodoComponent;