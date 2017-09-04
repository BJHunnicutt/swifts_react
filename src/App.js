import React, { Component } from 'react';
import { Route } from 'react-router-dom'

// Pages
import Header from './components/header'
// import ContactPage from './containers/contact'
// import AboutPage from './containers/about'
import CountdownPage from './containers/countdown.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>When will they go in?</h2>
        </div>

        {/* Render the header */}
        <Header />

        <Route path="/" exact component={CountdownPage} />
        <Route path="/about" />
        <Route path="/contact" />
      </div>
    );
  }
}

export default App;
