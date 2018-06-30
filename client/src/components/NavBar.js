import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';
// import img from '../assets/imgs/B&DBurgers.png';
// import styled from 'styled_components';


const AppContainer = {
 background: "maroon"
}

const Background = {
  background: "light_yellow"
}

const FontColor = {
  color: "white",
  size: "14px"
}

// const Content = styled.div`
//     border: 1px solid #000;
//     background-image: url(${img});
//     width: 2000px;
//     height: 2000px;
//     `




class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Link to='/about'>
            <Menu.Item name='About' />
          </Link>
          <Link to='/menu'>
            <Menu.Item name='Menu' />
          </Link>
          <Link to='/stats'>
            <Menu.Item name='Stats' />
          </Link>
          <Menu.Item 
            style={FontColor}name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      )
    }
    return (
      <Menu.Menu position='right'>
        <Link to='/about'>
          <Menu.Item style={FontColor} name='About' />
        </Link>
        <Link to='/menu'>
          <Menu.Item style={FontColor} name='Menu' />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu style= {AppContainer} pointing secondary>
          <Link to='/'>
            <Menu.Item name='home' />
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
