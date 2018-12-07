import React, {Component} from 'react'
import {Link} from '../routes'
import { Image, Icon, Grid, Card, Dimmer, Loader } from 'semantic-ui-react'
import ApiDataCalls from '../services/ApiDataCalls'
import Globals from '../config/Globals'
import ShowMore from 'react-show-more';

class FondsDetails extends Component{


  constructor(props){
    super()
    this.state = {
      isLoaded: false,
      items: {
        description:"",
        seriesRes:[],
        subitemDetails:[],
      },
      error: ""
    }
  }


  componentDidMount() {
    let data = JSON.stringify({
      id: this.props.id
      })


    fetch(Globals.Globals.apiUrl+"/api-get-fonds",
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
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  renderSeriesCards(item,fondid){
    const itemList = item.map(function(name, index){
      if(index<8){
        return(
            <Link key={`c_${index}`} route={`/series-details/${name.ID}/${fondid}`}>
              <Card  color="olive">
                <Card.Content>
                  <Card.Header>{name.title}</Card.Header>
                  <Card.Meta>{name.unqiue_ref_no}</Card.Meta>
                  <Card.Description>Date Range: {name.woods_date_range} </Card.Description>
                </Card.Content>      
              </Card>
            </Link>
        )
      }
    })
    return itemList
  }
  renderSubitemsCards(item){
    const itemList = item.map(function(name, index){
      if(index<8){
        return(
            <Card key={`si_${index}`} color="olive">
              <Image src={`${Globals.Globals.lorisUrl}/${name.fullfilename}/full/full/0/default.jpg`} />
                   
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
            
            <Dimmer active={!this.state.isLoaded} inverted>
            <Loader>Loading</Loader>
            </Dimmer>
          
            <p><strong>{this.state.items.prefix} | {this.state.items.name}</strong><br />
            {this.state.items.alt_name}
            </p>

            <div className={this.state.items.description ? '' : 'hidden'}>
              <hr />
              <p><i>Description</i></p>
              
                 <ShowMore
                    lines={15}
                    more='Show more'
                    less='Show less'
                    anchorClass=''
                >
                    {this.state.items.description}
                </ShowMore>
              
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
             {this.renderSeriesCards(this.state.items.seriesRes, this.state.items.ID)}
             </Card.Group>
             <p className="link-right"><Link route={`/results/series-results/${this.state.items.ID}`}><a>View More >></a></Link></p>
          </Grid.Column>
        </Grid.Row>


        
      </Grid>
      

      
      )
  }
}

export default FondsDetails