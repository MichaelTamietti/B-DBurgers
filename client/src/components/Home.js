import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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

const WelcomeSentence = styled.h3`
  text-align: center;
`


const Home = () => (
  <div className="center">
    <WelcomeHeader>Welcome to B & D Burgers</WelcomeHeader>
    <WelcomeSentence>Here Are Some Of Our Specials!</WelcomeSentence>
    <div className="ui two column grid">
      <div className="column">
        <div className="ui segment">
            <Link to="/menu">
              <img className="ui image" src={burger1}/>
            </Link>
        </div>
      </div>
      <div className="column">
        <div className="ui segment">
          <Link to="/menu">
            <img className="ui image" src={burger2}/>
          </Link>
        </div>
      </div>
      <div className="column">
        <div className="ui segment">
          <Link to="/menu">
            <img className="ui image" src={burger3}/>
          </Link>
        </div>
      </div>
      <div className="column">
        <div className="ui segment">
          <Link to="/menu">
            <img className="ui image" src={burger4}/>
          </Link>
        </div>
      </div>
      <div className="column">
        <div className="ui segment">
          <Link to="/menu">
            <img className="ui image" src={burger5}/>
          </Link>
        </div>
      </div>
      <div className="column">
        <div className="ui segment">
          <Link to="/menu">
            <img className="ui image" src={burger7}/>
          </Link>
        </div>
      </div>
    </div>

  </div>
) 
  

export default Home
