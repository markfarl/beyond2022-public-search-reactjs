import React, {Component} from 'react'
import { Image, Icon, Grid, Card } from 'semantic-ui-react'

class BrowseCardList extends Component{
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
      ]
    }
  }

  renderCards(item){
    const itemList = item.map(function(name, index){
      return(
        <Grid.Column>
          <Card href="/fonds" color={name.color} fluid>
            <Image src={`/static/images/${name.url}`} />
            <Card.Content>
              <Card.Header>{name.header}</Card.Header>
              <Card.Description>{name.description}</Card.Description>
            </Card.Content>      
          </Card>            
        </Grid.Column>
        )
    })
    return itemList
  }

  render(){
    return(
      <Grid columns={3} padded>
        <Grid.Row>
          {this.renderCards(this.state.items)}
        </Grid.Row>
      </Grid>

      )
  }
}

export default BrowseCardList