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
        <div>
            <div className = 'header'>
            Battleship
            </div>
                <div className='app'>
                <Board />
                </div>
        </div>
        )
    }
}

export default App;
