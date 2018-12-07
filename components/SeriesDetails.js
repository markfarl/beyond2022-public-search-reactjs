import React, {Component} from 'react'
import {Link} from '../routes'
import { Image, Icon, Grid, Card, Dimmer, Loader } from 'semantic-ui-react'
import Globals from '../config/Globals'
import ShowMore from 'react-show-more'

class SeriesDetails extends Component{


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


    fetch(Globals.Globals.apiUrl+"/api-get-series-details",
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            'Accept': 'application/json, text/plain, */*',
             "Content-Type": "application/x-www-form-urlencoded",
          },
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

         
          console.log(this.state.items)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  renderSeriesCards(item){
    const itemList = item.map(function(name, index){
      if(index<4){
        return(
            <Link route={`/results/series-results/${name.ID}`}>
              <Card key={`c_${index}`} color="olive">
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
    console.log(Globals)
    const itemList = item.map(function(name, index){
      if(index<40){
        return(
              <Card key={`si_${index}`} color="olive">
                <a href={`http://universalviewer.io/uv.html?manifest=http://by2022.adaptcentre.ie/manifest/?id=${name.ID}`} target="_BLANK">
                  <Image src={`${Globals.Globals.lorisUrl}/${name.fileurl}/full/full/0/default.jpg`} />
                </a>
                <Card.Content>
                  <Card.Header>
                    <a href={`http://universalviewer.io/uv.html?manifest=http://by2022.adaptcentre.ie/manifest/?id=${name.ID}`} target="_BLANK">
                      {name.REFNUM}
                    </a>
                  </Card.Header>
                  <Card.Description>
                    <a href={`http://universalviewer.io/uv.html?manifest=http://by2022.adaptcentre.ie/manifest/?id=${name.ID}`} target="_BLANK">
                    {name.item_title} 
                    </a>
                  </Card.Description>
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
          <Grid.Column className="series-details" width={10}>
            <Dimmer active={!this.state.isLoaded} inverted>
                <Loader>Loading</Loader>
            </Dimmer>
            <p><strong>{this.state.items.unqiue_ref_no} | {this.state.items.title}</strong><br />
            {this.state.items.alt_name}
            </p>
            <hr />
            <div className={this.state.items.woods_desc ? '' : 'hidden'}>
              
              <p><i>Description</i></p>
              
                 <ShowMore
                    lines={15}
                    more='Show more'
                    less='Show less'
                    anchorClass=''
                >
                 <div dangerouslySetInnerHTML={ { __html: this.state.items.woods_desc } }></div>
                </ShowMore>
              
            </div>

            <div className={this.state.items.woods_date_range ? '' : 'hidden'}>
              
              <p><i>Woods Date Range</i></p>
              <div dangerouslySetInnerHTML={ { __html: this.state.items.woods_date_range } }></div>
            </div>

            <div className={this.state.items.woods_page ? '' : 'hidden'}>
              
              <p><i>Woods Page</i></p>
              <div dangerouslySetInnerHTML={ { __html: this.state.items.woods_page } }></div>
            </div>

            <div className={this.state.items.alt_title ? '' : 'hidden'}>
              
              <p><i>Alternative title</i></p>
              <div dangerouslySetInnerHTML={ { __html: this.state.items.alt_title } }></div>
            </div>

            <div className={this.state.items.appraisal_destruction ? '' : 'hidden'}>
              
              <p><i>appraisal_destruction</i></p>
              <div dangerouslySetInnerHTML={ { __html: this.state.items.appraisal_destruction } }></div>
            </div>

            <div className={this.state.items.archival_history ? '' : 'hidden'}>
              
              <p><i>archival_history</i></p>
              <div dangerouslySetInnerHTML={ { __html: this.state.items.archival_history } }></div>
            </div>

            <div className={this.state.items.copies_information ? '' : 'hidden'}>
              
              <p><i>copies_information</i></p>
              <div dangerouslySetInnerHTML={ { __html: this.state.items.copies_information } }></div>
            </div>

            <div className={this.state.items.creators ? '' : 'hidden'}>
              
              <p><i>creators</i></p>
              <div dangerouslySetInnerHTML={ { __html: this.state.items.creators } }></div>
            </div>

            <div className={this.state.items.date_acq_by_proi ? '' : 'hidden'}>
              
              <p><i>date_acq_by_proi</i></p>
              <div dangerouslySetInnerHTML={ { __html: this.state.items.date_acq_by_proi } }></div>
            </div>

            <div className={this.state.items.extent_and_medium ? '' : 'hidden'}>
              
              <p><i>extent_and_medium</i></p>
              <div dangerouslySetInnerHTML={ { __html: this.state.items.extent_and_medium } }></div>
            </div>

            <div className={this.state.items.ffth_dkpri_desc ? '' : 'hidden'}>
              
              <p><i>ffth_dkpri_desc</i></p>
              <div dangerouslySetInnerHTML={ { __html: this.state.items.ffth_dkpri_desc } }></div>
            </div>

            <div className={this.state.items.ffth_dkpri_desc_pagenum ? '' : 'hidden'}>
              
              <p><i>ffth_dkpri_desc_pagenum</i></p>
              <div dangerouslySetInnerHTML={ { __html: this.state.items.ffth_dkpri_desc_pagenum } }></div>
            </div>

            <div className={this.state.items.finding_aids ? '' : 'hidden'}>
              
              <p><i>finding_aids</i></p>
              <div dangerouslySetInnerHTML={ { __html: this.state.items.finding_aids } }></div>
            </div>

            <div className={this.state.items.im_src_acq_by_proi ? '' : 'hidden'}>
              
              <p><i>im_src_acq_by_proi</i></p>
              <div dangerouslySetInnerHTML={ { __html: this.state.items.im_src_acq_by_proi } }></div>
            </div>

            <div className={this.state.items.keywords ? '' : 'hidden'}>
              
              <p><i>keywords</i></p>
              <div dangerouslySetInnerHTML={ { __html: this.state.items.keywords } }></div>
            </div>

            <div className={this.state.items.lang_scripts_material ? '' : 'hidden'}>
              
              <p><i>lang_scripts_material</i></p>
              <div dangerouslySetInnerHTML={ { __html: this.state.items.lang_scripts_material } }></div>
            </div>
            
            <div className={this.state.items.location_proi ? '' : 'hidden'}>
              
              <p><i>location_proi</i></p>
              <div dangerouslySetInnerHTML={ { __html: this.state.items.location_proi } }></div>
            </div>
            
            <div className={this.state.items.new_desc ? '' : 'hidden'}>
              
              <p><i>new_desc</i></p>
              <div dangerouslySetInnerHTML={ { __html: this.state.items.new_desc } }></div>
            </div>
            
            <div className={this.state.items.originals_info ? '' : 'hidden'}>
              
              <p><i>originals_info</i></p>
              <div dangerouslySetInnerHTML={ { __html: this.state.items.originals_info } }></div>
            </div>
            
            <div className={this.state.items.physical_characteristics ? '' : 'hidden'}>
              
              <p><i>physical_characteristics</i></p>
              <div dangerouslySetInnerHTML={ { __html: this.state.items.physical_characteristics } }></div>
            </div>
            
            <div className={this.state.items.publication_note ? '' : 'hidden'}>
              
              <p><i>publication_note</i></p>
              <div dangerouslySetInnerHTML={ { __html: this.state.items.publication_note } }></div>
            </div>
            
            <div className={this.state.items.related_material ? '' : 'hidden'}>
              
              <p><i>related_material</i></p>
              <div dangerouslySetInnerHTML={ { __html: this.state.items.related_material } }></div>
            </div>
            
            <div className={this.state.items.scope_and_nature ? '' : 'hidden'}>
              
              <p><i>scope_and_nature</i></p>
              <div dangerouslySetInnerHTML={ { __html: this.state.items.scope_and_nature } }></div>
            </div>
            
           

          </Grid.Column>
          <Grid.Column width={6}>
          <div className={this.state.items.date_range_from ? '' : 'hidden'}>
              <p><strong>Meta</strong></p>
              <hr />
              <p><i>Date Range</i></p>
              {this.state.items.date_range_from} - {this.state.items.date_range_to}
            </div>
            
            <div className={this.state.items.date_acq_by_proi ? '' : 'hidden'}>
              <hr />
              <p><i>Date Aquired</i></p>
              {this.state.items.date_acq_by_proi}
            </div>
            
            
          </Grid.Column>
        </Grid.Row>




        <Grid.Row>
          <Grid.Column width={16} className={this.state.items.subitemDetails.length > 0 ? '' : 'hidden'}>
          <hr />
           <p><strong>Substitute items</strong><br />
            {this.state.items.subitemDetails.length} related substitute items
            </p>
            <Card.Group>
              {this.renderSubitemsCards(this.state.items.subitemDetails)}
             </Card.Group>
          </Grid.Column>
        </Grid.Row>
        
      </Grid>


      
      )
  }
}

export default SeriesDetails