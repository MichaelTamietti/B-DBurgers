import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import NoMatch from './NoMatch'
import NavBar from './NavBar'
import Login from './Login'
import Register from './Register'
import Flash from './Flash'
import Home from './Home'
import ProtectedRoute from './ProtectedRoute'
import AuthRoute from './AuthRoute'
import FetchUser from './FetchUser'
import About from './About'
import Menu from './Menu'
import Stats from './Stats'
import AdminMenu from './AdminMenu';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/menu' component={Menu} />
            <ProtectedRoute exact path='/admin/stats' component={Stats} />
            <ProtectedRoute exact path='/admin/menu' component={AdminMenu} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
        <Footer />
      </div>
    )
  }
}

export default App


