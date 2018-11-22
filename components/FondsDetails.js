import React, {Component} from 'react'
import Link from 'next/link'
import { Image, Icon, Grid, Card } from 'semantic-ui-react'
import ApiDataCalls from '../services/ApiDataCalls'


class FondsDetails extends Component{

  

  constructor(props){
    super()
    let apiData = new ApiDataCalls
    let fondsData = apiData.getFondsData()
    this.state = {
      isLoaded: false,
      items: {
        seriesRes:[]
      },
      error: ""
    }
  }


  componentDidMount() {
    let data = JSON.stringify({
      id: this.props.id
      })


    fetch("http://by2022.adaptcentre.ie/api-get-fonds",
    //fetch("http://localhost/beyond2022wp/wordpress/api-get-fonds",
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            'Accept': 'application/json, text/plain, */*',
             "Content-Type": "application/x-www-form-urlencoded",
          },
          //body: JSON.stringify({a: 7, str: 'Some string: &=&'})
          body: data
      }
      )
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: JSON.parse(result)[0]
          });
          console.log(this.state.items)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  renderSeriesCards(item){
    const itemList = item.map(function(name, index){
      if(index<4){
        return(
            <Card color="olive">
              <Card.Content>
                <Card.Header>{name.title}</Card.Header>
                <Card.Meta>{name.unqiue_ref_no}</Card.Meta>
                <Card.Description>Date Range: {name.woods_date_range} </Card.Description>
              </Card.Content>      
            </Card>
        )
      }
    })
    return itemList
  }


  render(){
    return(
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <p><strong>{this.state.items.prefix} | {this.state.items.name}</strong><br />
            {this.state.items.alt_name}
            </p>

            <div className={this.state.items.description ? '' : 'hidden'}>
              <hr />
              <p><i>Description</i></p>
              <p>{this.state.items.description}</p>
            </div>
            <div className={this.state.items.biblioname ? '' : 'hidden'}>
              <hr />
              <p><i>Bibliography</i></p>
              <div dangerouslySetInnerHTML={ { __html: this.state.items.biblioname } }></div>
            </div>
          </Grid.Column>
          <Grid.Column width={6}>
            <p><strong>Sub fonds</strong><br />
            16 Sub Fonds
            </p>
            <hr />
            <p><a href="#">(1) 1 Chancery Enrolments</a></p>
            <p><a href="#">(2) 2 Judicial Proceedings</a></p>
            <p><a href="#">(3) 3 Clerk of the Crown and Hanaper</a></p>
            <p><a href="#">(4) 4 Lunacy Office</a></p>
            <p><a href="#">(5) 5 Secretary to the Lord Chancellor</a></p>
            <p><a href="#">(6) 6 Lord Chancellor's Secretary of Bankrupts</a></p>
            
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={16} className={this.state.items.seriesResCount > 0 ? '' : 'hidden'}>
          <hr />
           <p><strong>Related Series</strong><br />
            {this.state.items.seriesResCount} related series in {this.state.items.name}
            </p>
             <Card.Group>
             {this.renderSeriesCards(this.state.items.seriesRes)}
             </Card.Group>
             <p className="link-right"><a href="#">View More >></a></p>
          </Grid.Column>
        </Grid.Row>


        <Grid.Row>
          <Grid.Column width={16}>
          <hr />
           <p><strong>Substitute items</strong><br />
            16 related substitute items
            </p>
             <Card.Group>
            <Card color="olive">
              <Image src="/static/images/sample_1.jpg" />
              <Card.Content>
                <Card.Header>Armagh Papers</Card.Header>
                <Card.Description>3. Copies of Inquisitions re Parishes: </Card.Description>
              </Card.Content>      
            </Card>
            <Card color="olive">
              <Image src="/static/images/sample_1.jpg" />
              <Card.Content>
                <Card.Header>Armagh Papers</Card.Header>
                <Card.Description>3. Copies of Inquisitions re Parishes: </Card.Description>
              </Card.Content>      
            </Card>
            <Card color="olive">
              <Image src="/static/images/sample_1.jpg" />
              <Card.Content>
                <Card.Header>Armagh Papers</Card.Header>
                <Card.Description>3. Copies of Inquisitions re Parishes: </Card.Description>
              </Card.Content>      
            </Card>
            <Card color="olive">
              <Image src="/static/images/sample_1.jpg" />
              <Card.Content>
                <Card.Header>Armagh Papers</Card.Header>
                <Card.Description>3. Copies of Inquisitions re Parishes: </Card.Description>
              </Card.Content>      
            </Card>
             </Card.Group>
             <p className="link-right"><a href="#">View More >></a></p>
          </Grid.Column>
        </Grid.Row>
        
      </Grid>


      
      )
  }
}

export default FondsDetails