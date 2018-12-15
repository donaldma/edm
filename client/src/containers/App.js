import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { postActivity } from '../actions'
import Home from '../components/Home'
import ToastWrapper from '../components/ToastWrapper'
import ScrollToTop from '../components/ScrollToTop'

class App extends Component {
  componentDidMount() {
    this.props.postActivity()
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className='main-container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route component={Home} />
            </Switch>
            <ToastWrapper />
          </div>
        </ScrollToTop>
      </Router>
    )
  }
}

const mapDispatchToProps = {
  postActivity
}

export default connect(
  null,
  mapDispatchToProps
)(App)
