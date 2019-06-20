import React, { Component } from 'react';

class Square extends Component {
    constructor(props) {
        super(props)
        this.state = {
            square: "",
            defaultQuestionMark: "?",
        }
    }

    handleClick = () => {
        if (this.props.treasure === this.props.index){
            this.setState({square: 'treasure', defaultQuestionMark: ''})
            alert("You win!")
            window.location.reload()
        } else {
            this.setState({square: 'hit', defaultQuestionMark: ''})
            alert("Try again!")
        }
    }

    render () {
        return (
            <div id={this.state.square} onClick={this.handleClick}>
                {this.state.defaultQuestionMark}
            </div>
        )
    }
}

export default Square;
