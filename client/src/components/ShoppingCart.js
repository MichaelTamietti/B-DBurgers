import React, { Component } from 'react';
import axios from 'axios'

class ShoppingCart extends Component {

  state = {
    items: []
  }

  render() {

    const {
      addItem,
      updateItem,
      deleteItem,
      state,
    } = this;

    const {
      items
    } = state

    return (
      <div className="container">
        <div>
          Here is where the store would go
        </div>
      </div>
    );
  }
}

export default ShoppingCart;