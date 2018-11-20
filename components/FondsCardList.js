import React, {Component} from 'react'
import Link from 'next/link'
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
    fetch("http://by2022.adaptcentre.ie/api-get-fonds",
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
              //"Content-Type": "application/json; charset=utf-8",
               "Content-Type": "application/x-www-form-urlencoded",
          },
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
      }

      )
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
        <Link href={{ pathname: '/fonds-details', query: { id: name.ID } }}>
          <Card color="olive">
            <Card.Content>
              <Card.Header>{name.name} ({name.prefix})</Card.Header>
              <Card.Description>{name.alt_name}</Card.Description>
            </Card.Content>      
          </Card>
        </Link>     
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