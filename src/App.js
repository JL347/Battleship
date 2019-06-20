import React, { Component } from 'react';
import Board from './Board';
import Square from './Square';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render () {

        return (
            <div className='app'>
            <Board />
            </div>
            
        )
    }
}

export default App;
