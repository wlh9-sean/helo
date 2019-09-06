import React, { Component } from 'react'

import Nav from './Components/Nav/Nav'
import routes from './routes'


export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        {routes}
      </div>
    )
  }
}

