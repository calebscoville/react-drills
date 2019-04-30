import React, { Component } from "react";

class Login extends Copmponent {
    constructor() {
        super();

        this.state = {
            username: "",
            password: ""
        };

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleUsernameChange(name) {
        this.setState({ username: name })
    }
    handlePasswordChange(pass) {
        this.setState({ password: pass })
    }
    
    handleLogin() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }

    render() {
        return (
            <div>
                <input onChange={e => this.handleLogin.handleUsernameChange(e.target.value)}
                type="text"
                />
                <input onChange={e => this.handleLogin.handlePasswordChange(e.target.value)}
                type="text"}
                />
                <button onClick={this.handleLogin}>Login</button>
            </div>
        );
    }
}

export default Login;