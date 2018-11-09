import React, {Component} from 'react'
import { Image, Icon, Grid, Card } from 'semantic-ui-react'

class FondsCardList extends Component{
  constructor(){
    super()
    this.state = {
      items: [
      {
        header: 'Browse Fonds (Offices)',
        description: 'Browse woods guide the way he intended. This selection will bring the works of woods to life right in front of your eyes',
        color: 'olive',
        url: 'fonds.png'
      },
      {
        header: ' Browse By Repository',
       description: 'Browse woods guide the way he intended. This selection will bring the works of woods to life right in front of your eyes.',
        color: 'olive',
        url: 'repo.png'
      },
      {
        header: 'Browse Replacement items',
        description: 'Browse woods guide the way he intended. This selection will bring the works of woods to life right in front of your eyes',
        color: 'olive',
        url: 'items.png'
      },
      {
        header: 'Browse Replacement items',
        description: 'Browse woods guide the way he intended. This selection will bring the works of woods to life right in front of your eyes',
        color: 'olive',
        url: 'items.png'
      },
      {
        header: 'Browse Replacement items',
        description: 'Browse woods guide the way he intended. This selection will bring the works of woods to life right in front of your eyes',
        color: 'olive',
        url: 'items.png'
      },
      {
        header: 'Browse Replacement items',
        description: 'Browse woods guide the way he intended. This selection will bring the works of woods to life right in front of your eyes',
        color: 'olive',
        url: 'items.png'
      },
      {
        header: 'Browse Replacement items',
        description: 'Browse woods guide the way he intended. This selection will bring the works of woods to life right in front of your eyes',
        color: 'olive',
        url: 'items.png'
      },
      {
        header: 'Browse Replacement items',
        description: 'Browse woods guide the way he intended. This selection will bring the works of woods to life right in front of your eyes',
        color: 'olive',
        url: 'items.png'
      },
      {
        header: 'Browse Replacement items',
        description: 'Browse woods guide the way he intended. This selection will bring the works of woods to life right in front of your eyes',
        color: 'olive',
        url: 'items.png'
      },
      {
        header: 'Browse Replacement items',
        description: 'Browse woods guide the way he intended. This selection will bring the works of woods to life right in front of your eyes',
        color: 'olive',
        url: 'items.png'
      },
      {
        header: 'Browse Replacement items',
        description: 'Browse woods guide the way he intended. This selection will bring the works of woods to life right in front of your eyes',
        color: 'olive',
        url: 'items.png'
      },
      ]
    }
  }

  renderCards(item){
    const itemList = item.map(function(name, index){
      return(
          <Card color={name.color}>
            <Card.Content>
              <Card.Header>{name.header}</Card.Header>
              <Card.Description>{name.description}</Card.Description>
            </Card.Content>      
          </Card>       
        )
    })
    return itemList
  }

  render(){
    return(
      <Card.Group>
          {this.renderCards(this.state.items)}
      </Card.Group>

      )
  }
}

export default FondsCardList