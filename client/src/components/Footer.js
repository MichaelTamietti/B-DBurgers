import React, { Component } from 'react';
import { Grid, Icon, Image } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


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
      <Grid>
        <div style= {styleBackground}>
        <h4 textAlign='Left'>University Location</h4>
        <h4 textAlign='Left'>222 South 1300 East</h4>
        <h6 textAlign='Left'>Ph:(801)582-7200</h6>
        <h6 textAlign='Left'>Hours: Mon-Fri 10:30am-9:30p</h6>
        <h6 textAlign='Left'>Sat-Sun 11:00am-9:00pm</h6>
        </div>
        <div style= {styleBackground}>
        <h4 textAlign='Left'>Midvale</h4>
        <h4 textAlign='Left'>7800 South State Street</h4>
        <h6 textAlign='Left'>Ph:(801)582-7200</h6>
        <h6 textAlign='Left'>Hours - Mon-Sat 11:00am-9:00pm</h6>
        <h6 textAlign='Left'>© Copyright 2013 B&D Burger All Rights Reserved</h6>
        </div>
        <div style= {styleBackground}>
        <Link style={styles.styleButton} to='/register'>Admin</Link>
    </div >
    
    <div style= {styleBackground}></div>

    <div class="grey row"></div>
    <div style={styles.footerAlign}></div>

    </Grid>
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