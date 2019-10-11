import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        this.intervalMs = props.updateInterval !== null ? props.updateInterval * 1000 : 1000
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            this.intervalMs
        )
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <p>It is {this.state.date.toLocaleTimeString()}.</p>
        )
    }
}

export default Clock