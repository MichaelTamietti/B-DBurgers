import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react';

class ItemForm extends Component {
  defaultValues = { name: '', price: 0.0}
  state = { ...this.defaultValues }

  handleSubmit = (e) => {
    e.preventDefault()
    let item = { ...this.state }
    this.props.addItem(...item)
    this.setState({ ...this.defaultValues })
  }

  handleUpdate = (e) => {
    e.preventDefault()
    let item = { ...this.state }
    this.props.updateItem(...item)
    this.setState({ ...this.defaultValues })
  }

  handleChange = (e) => {
    let { target: { id, value } } = e
    this.setState({ [id]: value })
  }

  formType = () => {
    let { name, price } = this.state
    const { type } = this.props
    if (type) {
      return (
        <form onSubmit={this.handleUpdate}>
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
    }else {
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

  render() {
    return (
      <div>
        <Menu pointing secondary>
          {this.formType()}
        </Menu>
      </div>
    )
  }
}

export default ItemForm