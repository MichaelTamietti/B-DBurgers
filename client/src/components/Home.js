import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import styled from 'styled-components'
import burger1 from '../assets/imgs/bd1.png'
import burger2 from '../assets/imgs/bd2.png'
import burger3 from '../assets/imgs/bd3.png'
import burger4 from '../assets/imgs/bd4.png'
import burger5 from '../assets/imgs/bd5.png'
import burger7 from '../assets/imgs/bd7.png'

const WelcomeHeader = styled.h1`
  font-size: 4em;
  text-align: center;
  padding: 20px 0;
  color: #B11018;
`

const Home = () => (
  <div className="center">
    <WelcomeHeader>Welcome to B & D Burgers</WelcomeHeader>

    <div className="ui two column grid">
      <div className="column">
        <div className="ui segment">
          <img className="ui image" src={burger1}/>
        </div>
      </div>
      <div className="column">
        <div className="ui segment">
          <img className="ui image" src={burger2}/>
        </div>
      </div>
      <div className="column">
        <div className="ui segment">
          <img className="ui image" src={burger3}/>
        </div>
      </div>
      <div className="column">
        <div className="ui segment">
          <img className="ui image" src={burger4}/>
        </div>
      </div>
      <div className="column">
        <div className="ui segment">
          <img className="ui image" src={burger5}/>
        </div>
      </div>
      <div className="column">
        <div className="ui segment">
          <img className="ui image" src={burger7}/>
        </div>
      </div>
    </div>

  </div>
) 
  

export default Home
