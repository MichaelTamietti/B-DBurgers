import React, { Component } from 'react'

class ItemForm extends Component {
  defaultValues = { name: '', price: 0.0}
  state = { ...this.defaultValues }

  handleSubmit = (e) => {
    e.preventDefault()
    let item = { ...this.state }
    this.props.addItem(item)
    this.setState({ ...this.defaultValues })
  }

  handleChange = (e) => {
    let { target: { id, value } } = e
    this.setState({ [id]: value })
  }

  render() {
    let { name, price } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id='name'
          placeholder='Name of Item'
          value={name}
          onChange={this.handleChange}
          required
        />
        <input
          id='price'
          placeholder='Price'
          type='number'
          value={price}
          onChange={this.handleChange}
          required
        />

        <button>Submit</button>
      </form>
    )
  }
}

export default ItemForm