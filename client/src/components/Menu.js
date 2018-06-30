import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import MenuList from './MenuList'
import ShoppingCart from './ShoppingCart';
import ItemForm from './ItemForm'
import axios from 'axios'

class Menu extends Component {
  state = {
    items: [],
    shopItems: [],
    showForm: false,
  }

  // When the menu is loaded, set state to equal everything in the rails database
  componentDidMount() {
    axios.get('/items')
      .then(res => {
        this.setState({ items: res.data })
      })
  }

  // Add the item to the database
  addItem = (item) => {
    axios.post('/items', { item })
      .then(res => this.setState({ items: [res.data, ...this.state.items] }))
  }

  // Show the form for adding or editing items
  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  form = () => {
    return <ItemForm addItem={this.addItem} />
  }

  // Update an item
  updateItem = (id) => {
    this.form()
    let items = this.state.items.map(i => {
      if (i.id === id)
        return { ...i }
      return i
    })

    this.setState({ items })
  }

  // Delete an item
  deleteItem = (id) => {
    const { items } = this.state
    axios.delete(`/items/${id}`)
      .then(this.setState({ items: items.filter(i => i.id !== id) }))
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleForm}> {this.state.showForm ? 'Hide' : 'Show'}</button>
        {this.state.showForm && this.form()}
        <ShoppingCart items={this.state.shopItems} />
        <MenuList items={this.state.items} updateItem={this.updateItem} deleteItem={this.deleteItem}/>
      </div>
    )
  }
}

export default Menu