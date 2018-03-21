import React, {Component} from 'react';
import './App.css';
import {List, ListItem} from 'material-ui/List';
import * as data from './data'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {TextField} from "material-ui";
import Fuse from 'fuse.js'
import {ActionDone, AlertWarning, ContentClear} from "material-ui/svg-icons/index";

var options = {
    keys: ['name'],
};
var fuse = new Fuse(data, options);
var list = data.slice();

function getIcon(iconName){
    if(iconName === "yes"){
        return <ActionDone/>
    } else if (iconName === "conditionally") {
        return <AlertWarning/>
    } else if (iconName === "no") {
        return <ContentClear />
    }
}
class App extends Component {
    handleChange = (event) => {
        if (event.target.value === "") {
            list = data
        } else {
            list = fuse.search(event.target.value);
        }
        this.setState({
            value: event.target.value,
        });
    };
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <TextField
                        floatingLabelText="Szukany produkt"
                        onChange={this.handleChange}
                    />
                    <List/>
                    {
                        list.map((d, n) => <ListItem primaryText={d['name']} rightIcon={getIcon(d['statusw'])} key={n}/>)
                    }
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
