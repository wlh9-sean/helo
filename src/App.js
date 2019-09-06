import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

import Nav from './Components/Nav/Nav'
import Auth from './Components/Auth/Auth'
import routes from './routes'


class App extends Component {
  render() {
    
    return (
      <div>

      {this.props.location.pathname === '/' ?
        (<Auth />)
        :
        (
          <>
          <Nav />
          {routes}</>
        )
    }
      </div>
    )
  }
}

export default withRouter(App)