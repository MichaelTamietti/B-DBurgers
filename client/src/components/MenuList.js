import React, { Component } from 'react'
import { Card, Image, Divider } from 'semantic-ui-react';

const styles = {
  image: {
    height: 25,
    width: 25,
  },
  card: {
    maxWidth: 330,
  }
}

const MenuList = ({ items, updateItem, deleteItem }) => (
  <div>
    <Card.Group itemsPerRow={4}>
      {items.map(item =>
        <Card key={item.id}>
          <Card.Content>
            <Card.Header>
              {item.name}
            </Card.Header>
            if (user.id) {
              <div>
                <Divider />
                <button onClick={updateItem}>Update</button>
                <button onClick={deleteItem}>Delete</button>
              </div>
            }
          </Card.Content>
        </Card>
      )}
    </Card.Group>
  </div>
)

export default MenuList