import React, {Component} from 'react';
import { FlatButton, TextField } from 'material-ui';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

let value;

function onClick() {
    alert(value);
}

function saveInputValue(e, data) {
    value = data;
}


class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>Welcome to Direct</h2>
                    </div>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                    <TextField onChange={saveInputValue} />
                    <FlatButton label="SUPER BUTTON" onClick={onClick} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;