import React, {Component} from 'react'
import { Image, Icon, Grid, Card } from 'semantic-ui-react'

class BrowseCardList extends Component{
  constructor(){
    super()
    this.state = {
      items: [
      {
        header: 'Enter the Record Treasury',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis diam quis erat congue aliquet. Aliquam semper lorem sed nisi ultrices, in condimentum augue euismod. Curabitur tempus tellus arcu, ut pretium massa vestibulum eget. Sed pretium scelerisque fringilla.',
        color: 'olive',
        url: 'fonds.png'
      },
      {
        header: ' Explore Inventory of Loss and Survival',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis diam quis erat congue aliquet. Aliquam semper lorem sed nisi ultrices, in condimentum augue euismod. Curabitur tempus tellus arcu, ut pretium massa vestibulum eget. Sed pretium scelerisque fringilla.',        
        color: 'olive',
        url: 'repo.png'
      },
      {
        header: 'View Digitizations',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis diam quis erat congue aliquet. Aliquam semper lorem sed nisi ultrices, in condimentum augue euismod. Curabitur tempus tellus arcu, ut pretium massa vestibulum eget. Sed pretium scelerisque fringilla.',        
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