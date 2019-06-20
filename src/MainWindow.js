import React, { Component } from "react";

//importamos el componente, deben comenzar con mayusculas
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

class MainWindow extends Component {

    constructor() {
        super();
        this.state = {
            authToken: null,
            userName: 'Auditor'
        };
    }

    actualizarAuthToken = (token) => {
        this.setState({
            authToken: token,
        });
    }

    render = () => {
        return (
            <div className="App">

                {!this.state.authToken &&
                    <Home actualizarAuthToken={this.actualizarAuthToken.bind(this)}/>
                }                

                {this.state.authToken &&
                    <Dashboard />
                }  

            </div>
        );
    }
}

export default MainWindow;