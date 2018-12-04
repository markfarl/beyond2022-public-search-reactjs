import React, { Component } from 'react'
import {Link} from '../routes'
import { Grid, List, Header, Pagination } from 'semantic-ui-react'
import Globals from '../config/Globals'

class SeriesResults extends Component{
	  constructor(props){
	    super()
	    this.state = {
	      isLoaded: false,
	      items: {
	        description:"",
	        seriesRes:[],
	        subitemDetails:[],
	      },
	      error: "",
	      totalPages: 1,
	      itemsPerPage: 15,
	      activePage: 1,
	      seriesPagination: []
	    }
	  }
  	componentDidMount() {
	    let data = JSON.stringify({
	      id: this.props.fondid
	      })


	    fetch(Globals.Globals.apiUrl+"/api-get-series-results",
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
	            items: JSON.parse(result)[0],
	            totalPages: num,
	          })
	          let num =  parseInt(Math.floor(this.state.items.seriesRes.length/this.state.itemsPerPage), 10)
	          this.setState({
	            totalPages: num,
	          })
	          this.createList(1)
	        },
	        (error) => {
	          this.setState({
	            isLoaded: true,
	            error
	          })
	        }
	      )
	  }

	renderSeriesList(item){
		const itemList = item.map((name, index) =>{
			return(
				<Link route={`/series-details/${name.ID}/${this.props.fondid}`}>
				<List.Item key={`sseriesl_${name.ID}`}>
			      <List.Content>
			        <List.Header as='a'>{name.unqiue_ref_no} {name.title}</List.Header>
			        <List.Description as='a'>
			        	<div dangerouslySetInnerHTML={ { __html: name.woods_desc } }></div>
			        </List.Description>
			      </List.Content>
			    </List.Item>
			    </Link>
			)
		})
		return itemList	
  	}

  	handlePaginationChange = (e, { activePage }) => {
  		this.setState({ activePage })
  		this.createList(activePage)
  	}
  	createList(page){
  		let start = page*this.state.itemsPerPage
  		let end = start+this.state.itemsPerPage
  		this.setState({
	  		seriesPagination: this.state.items.seriesRes.slice(start, end)
	  	})
  	}

	render(){
		const { totalPages, activePage } = this.state

		return(
			<Grid className="grid-full" columns={2}>
	        <Grid.Row>
	        	<Grid.Column className="side-filter" width={4}>
	         		<Header as='h4'>Filters</Header>
	         		<hr />
	         		<p><strong>Fonds Naviagter</strong></p>
	         		<p>Folder</p>
	         		<hr />
	         		<p><strong>Keywords</strong></p>
	         		<p>Folder</p>

	         	</Grid.Column>
	        	<Grid.Column width={12}>
	        		<Header as='h4'>{this.state.items.seriesResCount} Series contained in {this.state.items.name}</Header>
	        		<List divided relaxed>
	         			 {this.renderSeriesList(this.state.seriesPagination)}
					  </List>
	         		<Pagination 
	         		activePage={parseInt(activePage)}
	         		onPageChange={this.handlePaginationChange}
	         		totalPages={parseInt(totalPages)} />	         		
	         	</Grid.Column>
	        </Grid.Row>
	      </Grid>
				
			)
	}
}

export default SeriesResults