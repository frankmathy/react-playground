import React, {Component} from 'react'

class EventsTest extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isToggleOn: true
        }

        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.')
    }

    handleButtonClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

    render() {
        return (
            <>
            <a href="#" onClick={this.handleClick}>
                Click me
            </a>
            <button onClick={this.handleButtonClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF' }
            </button>
            </>
        )
    }
}

export default EventsTest