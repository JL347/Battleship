import React, { Component } from 'react';
import Square from './Square'
class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spaces: Array(100).fill(0),
            ships: [],
            torpedo: 25,
            torpedoesUsed: 0,
            hits: 0,
            endGame: false,
        }
    }
    componentDidMount = () => {
        this.placeShips()
    }

    useTorpedo = () => {
        let {torpedo, torpedoesUsed} = this.state
        this.setState({torpedo: torpedo - 1, torpedoesUsed: torpedoesUsed + 1})
        if(this.state.torpedo <= 1){
            this.setState({endGame: true})
            alert("Ran out of torpedoes! You lose!")
        }
    }

    placeShips = () => {
        var newArr = []
        for(let i=0; i<5; i++){
            newArr.push(Math.floor(Math.random() * 99))
        }
        this.setState({ships: newArr})
    }

    onClickReload = () => {
        window.location.reload()
    }

    onHit = () => {
        this.setState({hits: this.state.hits + 1})
        if (this.state.hits === 4) {
            window.location.reload()
        }
    }



    render () {
        return (
            <div>
                <div className = 'board' onClick={this.useTorpedo}>
                {this.state.spaces.map((value, index) =>
                    <Square index={index} ships={this.state.ships} onHit={this.onHit} hits={this.state.hits} endGame={this.state.endGame}/>
                )}
                </div>
                <div>
                    Torpedoes remaining: {this.state.torpedo}
                    <br></br>
                    Torpedoes Used: {this.state.torpedoesUsed}
                    <br></br>
                    Hits: {this.state.hits}
                </div>
                <div>
                    <button className = 'button' onClick= {this.onClickReload}>
                    New Game
                    </button>
                </div>
            </div>
        )
    }
}

export default Board;
