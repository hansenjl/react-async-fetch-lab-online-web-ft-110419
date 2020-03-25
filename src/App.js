// create your App component here
import React, { Component } from 'react';

class App extends Component {
    state = {
       people: []
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
            .then(res => res.json())
            .then(astros => this.setState({people: astros.people}))
    }

    renderAstros(){
        if(this.state.people !== []){
            return(
            <ul>
                {this.state.people.map( a => <li>{a.name} - {a.craft}</li>)}
            </ul>
            )
        }
    }

    render(){
        return (
            <div>
                {this.renderAstros()}
            </div>
        )
    }
}

export default App;