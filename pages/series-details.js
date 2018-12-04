import React, { Component } from 'react'
import {Link} from '../routes'
import Layout from '../components/Layout'
import SeriesDetails from '../components/SeriesDetails'
import FondSearch from '../components/FondSearch'
import { Header, Divider } from 'semantic-ui-react'
import '../scss/style.scss'


class Fonds extends Component{

    static async getInitialProps(props){
        return {
          id:props.query.id,
          fondid:props.query.fondid
        }
      }

    render(){
        return(
                <Layout>
                	<Header as='h5'>
                        <Link route={`/`}>Home</Link> > <Link route={`/fonds`}>Fonds</Link> > 
                        <Link route={`/fonds-details/${this.props.fondid}`}>Fonds Details</Link> > 
                        <Link route={`/results/series-results/${this.props.fondid}`}> Series List </Link> >
                        <span className="higlight"> Series Details </span>
                    </Header>
                    <SeriesDetails id={this.props.id} fondid={this.props.fondid}/>
                    <Divider />                 
                    <FondSearch />          
                </Layout>
            
            )
    }

}
export default Fonds 