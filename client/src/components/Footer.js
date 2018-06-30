import React, { Component } from 'react';
import { Grid, Icon, Image } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import facebookicon from '../assets/imgs/facebookicon.png'


const styleBackground = {
    background: '#848484',
    
    
}
const styles = {
    styleButton: {
        border: '2px solid #000000',
        color: '#000000',
        display: 'block',
        margin: '35px  20px',
        width: '140px',
        fontSize: '10px',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        textAlign: 'center'
    }

    

  

    
}



class Footer extends Component {
    
    ifAdminFooter = () => {
        const { user, dispatch, history } = this.props
        
       

    if (user.id) {
      return (
        <div></div>
      );
    }

    return (

<div className="ui three column grid">
     <div style= {styleBackground} className="column">
       <div style= {styleBackground} className="ui segment">
        <h3 textAlign='Left'>University Location</h3>
        <h3 textAlign='Left'>222 South 1300 East</h3>
        <h4 textAlign='Left'>Ph:(801)582-7200</h4>
        <h4 textAlign='Left'>Hours: Mon-Fri 10:30am-9:30p</h4>
        <h4 textAlign='Left'>Sat-Sun 11:00am-9:00pm</h4>
       </div>
     </div>
     <div style= {styleBackground} className="column">
       <div style= {styleBackground} className="ui segment">
         <h3 textAlign='Left'>Midvale</h3>  
        <h3 textAlign='Left'>7800 South State Street</h3>
        <h4 textAlign='Left'>Ph:(801)582-7200</h4>
        <h4 textAlign='Left'>Hours - Mon-Sat 11:00am-9:00pm</h4>
        
       </div>
     </div>
     <div style= {styleBackground} className="column">
       <div style= {styleBackground} className="ui segment">
       <Link style={styles.styleButton} to='/register'>Admin</Link>
       <Link style={styles.styleButton} to='https://www.facebook.com/BandDBurgers'><img src={facebookicon}/>Facebook</Link>

       <h4 textAlign='Left'>© Copyright 2013 B&D Burger All Rights Reserved</h4>
       </div>
     </div>
     </div>


    
    );
  }

  render() {
    return (
      <div>
        { this.ifAdminFooter() }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
}

export default withRouter(connect(mapStateToProps)(Footer));


