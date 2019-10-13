import React from 'react'
import axios from '../firebase/FirebaseAccess'
import Spinner from './Spinner'

class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            value: '',
            result: 'n/a',
            loading: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        /*alert('A name was submitted: ' + this.state.value)*/
        this.setState({loading: true})
        const entry = {
            timestamp: new Date(),
            name: this.state.value
        }
        axios.post('/nameform.json', entry)
            .then(response => {
                this.setState({loading: false})
                this.setState({ result: response.statusText })
                console.log(response)
            })
            .catch(response => {
                this.setState({loading: false})
                this.setState({ result: response.statusText })
                console.log(response)
            })
        event.preventDefault()
}

    render() {
        let resultElements = <p>Result: {this.state.result}</p>
        if (this.state.loading) {
            resultElements = <Spinner/>
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:&nbsp;
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>&nbsp;
                <input type="submit" value="Submit"/>
                {resultElements}
            </form>
        )
    }
}

export default NameForm
