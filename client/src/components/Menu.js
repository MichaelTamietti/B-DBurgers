import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import MenuList from './MenuList'
import ShoppingCart from './ShoppingCart';
import ItemForm from './ItemForm'
import axios from 'axios'

class Menu extends Component {
  state = {
    shopItems: []
  }

  componentDidMount() {
    axios.get('/items')
      .then(res => {
        this.setState({ items: res.data })
      })
  }

  addItem = (name, price) => {
    let item = { name, price }
    fetch('/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(item)
    }).then(res => res.json())
      .then(item => {
        const { items } = this.state
        this.setState({ items: [item, ...items] })
      })

  }

  showForm = () => (
    <ItemForm addItem={this.addItem} />
  )

  updateApp = (id) => {
    this.showForm()
    let items = this.state.items.map(a => {
      if (a.id === id)
        return { ...a }
      return a
    })

    this.setState({ items })
  }

  deleteApp = (id) => {
    const { items } = this.state
    this.setState({ items: items.filter(a => a.id !== id) })
  }

  render() {
    return (
      <div>
        <MenuList />
        <ShoppingCart items={this.state.shopItems} />
      </div>
    )
  }
}

export default Menu