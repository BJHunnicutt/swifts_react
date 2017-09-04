import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

// Pages
// import ContactPage from './containers/contact.jsx'
// import AboutPage from './containers/about.jsx'
import CountdownPage from './containers/countdown.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>

        <ul>
          <li>
            <Link to="/">Countdown</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <Route path="/" exact component={CountdownPage} />
        <Route path="/about" />
        <Route path="/contact" />
      </div>
    );
  }
}

export default App;
