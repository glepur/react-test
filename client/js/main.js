import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

const About = React.createClass({
	render() {
	    return (
	      <div>
	        <h1>About</h1>
	      </div>
	    )
	}
})
const Inbox = React.createClass({
	render() {
	    return (
	      <div>
	        <h1>Inbox</h1>
	      </div>
	    )
	}
})
const Home = React.createClass({
	render() {
	    return (
	      <div>
	        <h1>Home</h1>
	      </div>
	    )
	}
})

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </Router>
), document.body)