import React, {Component} from 'react'
import { Image, Icon, Grid, Card } from 'semantic-ui-react'
import ApiDataCalls from '../services/ApiDataCalls'

class FondsCardList extends Component{
  constructor(){
    super()
    let apiData = new ApiDataCalls
    let fondsData = apiData.getFondsData()
    this.state = {
      isLoaded: false,
      items: [],
      error: ""
    }
  }


  componentDidMount() {
    fetch("http://by2022.adaptcentre.ie/api-get-fonds")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(JSON.parse(result))
          this.setState({
            isLoaded: true,
            items: JSON.parse(result)
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  renderCards(item){
    const itemList = item.map(function(name, index){
      return(
          <Card href="./" color="olive">
            <Card.Content>
              <Card.Header>{name.name} ({name.prefix})</Card.Header>
              <Card.Description>{name.alt_name}</Card.Description>
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