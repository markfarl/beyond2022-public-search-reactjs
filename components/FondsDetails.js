import React, {Component} from 'react'
import Link from 'next/link'
import { Image, Icon, Grid, Card } from 'semantic-ui-react'
import ApiDataCalls from '../services/ApiDataCalls'
import Globals from '../config/Globals'
import ShowMore from 'react-show-more';

class FondsDetails extends Component{


  constructor(props){
    super()
    let apiData = new ApiDataCalls
    let fondsData = apiData.getFondsData()
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
            <Card key={`c_${index}`} color="olive">
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
  renderSubitemsCards(item){
    console.log(Globals)
    const itemList = item.map(function(name, index){
      if(index<4){
        return(
            <Card key={`si_${index}`} color="olive">
              <Image src={`${Globals.Globals.lorisUrl}/${name.fullfilename}/full/full/0/default.jpg`} />
              <Card.Content>
                <Card.Header>{name.fileURL}</Card.Header>
                <Card.Description>{name.subtype} </Card.Description>
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
              <p>
                 <ShowMore
                    lines={15}
                    more='Show more'
                    less='Show less'
                    anchorClass=''
                >
                    {this.state.items.description}
                </ShowMore>
              </p>
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
          <Grid.Column width={16} className={this.state.items.subitemResCount > 0 ? '' : 'hidden'}>
          <hr />
           <p><strong>Substitute items</strong><br />
            {this.state.items.subitemResCount} related substitute items
            </p>
            <Card.Group>
              {this.renderSubitemsCards(this.state.items.subitemDetails)}
             </Card.Group>
             <p className="link-right"><a href="#">View More >></a></p>
          </Grid.Column>
        </Grid.Row>
        
      </Grid>


      
      )
  }
}

export default FondsDetails