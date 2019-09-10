import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'


export default class Auth extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            password: '',
            toDashboard: false
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
            if(this.state.toDashboard !== false){
                this.props.history.push('/dashboard')
            }
        })
        .catch(error => console.log(error))
    }

    login = () => {
        const {username, password} = this.state
        axios.post('/auth/login', {username, password})
        .then(response => {
            this.props.history.push('/dashboard')
        }).catch(err => console.log(err)) 
    }

 
    render() {
        if(this.state.dashboard === true){
            return <Redirect to='/dashboard' /> 
        }
        return (
            <div>
                <input 
                    type='text'
                    placeholder='Username:' 
                    name='username'
                    value={this.state.username}
                    onChange={this.handleChange}
                     />
                <input 
                    type='password'
                    placeholder='Password:' 
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange} />
                <button onClick={() => this.login}>Login</button>
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}
