import React, { Component } from 'react'
import MenuList from './MenuList'
import ShoppingCart from './ShoppingCart';
import axios from 'axios'

class Menu extends Component {
  state = {
    items: [],
    shopItems: [],
  }

  // When the menu is loaded, set state to equal everything in the rails database
  componentDidMount() {
    axios.get('/items')
      .then(res => {
        this.setState({ items: res.data })
      })
  }

  render() {
    return (
      <div>
        <MenuList items={this.state.items} />
        <ShoppingCart items={this.state.shopItems} />
      </div>
    )
  }
}

export default Menu