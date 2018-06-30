import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react';
import { Card, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux'
import "./Menulist.css"


const Color = {
  background: "maroon",
  color: "white",
}


const font = {
  textAlign: "Center",
  
}

class MenuList extends Component {

  menuItems = () => {
    const { user, items, updateItem, deleteItem } = this.props
    if (user.id) {
      return (
        <div>
          <Card.Group itemsPerRow={4}>
            {items.map(item =>
              <Card key={item.id}>
                <Card.Content >
                  <Card.Header>
                    {item.name}
                  </Card.Header>
                <Divider />
                  <button onClick={() => updateItem(item.id)}>Delete</button>
                  <button onClick={() => deleteItem(item.id)}>Delete</button>
                </Card.Content>
              </Card>
            )}
          </Card.Group>
        </div>
      )
    }
    return (
      <div>
        <Card.Group itemsPerRow={4}>
          {items.map(item =>
            <Card key={item.id} className="SingleCard">
              <Card.Content>
                <Card.Header style={font}>
                  {item.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.price}
                </Card.Header>
              </Card.Content>
            </Card>
          )}
        </Card.Group>
      </div>
    )
  }

  render() {
    return (
      <div style={Color}>
        <Menu pointing secondary>
          {this.menuItems()}
        </Menu>
      </div>
    )
  }
} 


const mapStateToProps = state => {
  return { user: state.user }
}

export default (connect(mapStateToProps)(MenuList))