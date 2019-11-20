import React , { Component } from "react";
import RegisterTemplate from "./html/register";

class RegisterComponent extends Component{
    constructor(){
        super();
        this.state = {
            title:"Demo App"
        }
    }

    render() {
        return (
            <RegisterTemplate />
        )
    }

}

export default RegisterComponent;