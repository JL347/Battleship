import React, { Component } from 'react';


class Square extends Component {
    constructor(props) {
        super(props)
        this.state = {
            square: "",
            firedAt: false,
        }
    }

    handleClick = () => {
        if (this.props.endGame === false){
            for (let i = 0; i <= this.props.ships.length; i++){
                console.log(this.props.ships);
                console.log(this.props.endGame);
                if (this.props.ships[i] !== this.props.index){
                    this.setState({square: 'miss'})
                } else if (this.props.ships[i] === this.props.index){
                    this.setState({square: "ship"})
                    this.props.onHit()
                    if(this.props.hits === 4){
                        alert("You hit all the ships. You win! Restarting now...")
                    } else {
                        alert("You hit a ship!")
                    }
                    return
                }
            }
        } else {
            for (let i = 0; i <= this.props.ships.length; i++){
                if (this.props.ships[i] === this.props.index){
                    this.setState({square: "ship"})
                    return
                }
            }
        }
    this.setState({firedAt: true})
    }

    render () {
        console.log(this.props.hits);
        return (
            <div id={this.state.square} onClick={this.handleClick}>

            </div>
        )
    }
}

export default Square;
