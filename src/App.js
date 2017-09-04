import React, { Component } from 'react';
import { Route } from 'react-router-dom'

// Pages
import Header from './components/header'
// import ContactPage from './containers/contact'
import AboutPage from './components/about'
import CountdownPage from './containers/countdown.js'


class App extends Component {
  render() {
    return (
      <div className="App">

        {/* Render the header */}
        <Header />

        <Route path="/" exact component={CountdownPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" />
      </div>
    );
  }
}

export default App;
