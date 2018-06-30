import React, { Component } from 'react'

class UpdateForm extends Component {
  state = { ...this.props.item }

  handleSubmit = (e) => {
    e.preventDefault()
    let item = { ...this.state }
    this.props.updateItem(item)
    this.setState({ item })
  }

  handleChange = (e) => {
    let { target: { id, value } } = e
    this.setState({ [id]: value })
  }

  render() {
    let { name, price } = this.state
    let { item } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id='name'
          placeholder={item.name}
          value={name}
          onChange={this.handleChange}
          required
        />
        <input
          id='price'
          placeholder={item.price}
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

export default UpdateForm