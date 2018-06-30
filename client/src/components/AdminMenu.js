import React, { Component } from 'react'
import ShoppingCart from './ShoppingCart';
import ItemForm from './ItemForm'
import axios from 'axios'
import MenuList from './MenuList';

class AdminMenu extends Component {
  state = {
    items: [],
    showForm: false,
  }

  // When the AdminMenu is loaded, set state to equal everything in the rails database
  componentDidMount() {
    axios.get('/items')
      .then(res => {
        this.setState({ items: res.data })
      })
  }

  // Add the item to the database
  addItem = (item) => {
    axios.post('/items', { item })
      .then(res => {
        this.setState({ items: [res.data, ...this.state.items], showForm: false })
      })
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
        <MenuList items={this.state.items} updateItem={this.updateItem} deleteItem={this.deleteItem} />
      </div>
    )
  }
}

export default AdminMenu