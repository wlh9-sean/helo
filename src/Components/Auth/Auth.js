import React, { Component } from 'react'
import axios from 'axios'

export default class Auth extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    register = () => {
        const {username, password} = this.state
        axios.post('/auth/register', {username, password})
        .then(res => {
            this.props.history.push('/dashboard')
        })
        .catch(error => console.log(error))
    }


    render() {
        return (
            <div>
                <input placeholder='Username:' name='username' />
                <input placeholder='Password:' name='password' />
                <button>Login</button>
                <button>Register</button>
            </div>
        )
    }
}
