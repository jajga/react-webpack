import React , { Component } from "react";

class TodoComponent extends Component{
    constructor(){
        super(props);
        this.state = {
            title:"Demo App"
        }
    }

    render() {
        return (
            <div>
                <h1>Hello from Todo component</h1>
            </div>
        )
    }

}

export default TodoComponent;