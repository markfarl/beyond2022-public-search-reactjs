import React, { Component } from 'react'
import {Link} from '../../routes'
import Layout from '../../components/Layout'
import SeriesResults from '../../components/SeriesResults'
import { Header, Divider } from 'semantic-ui-react'
import '../../scss/style.scss'


class Series extends Component{

    static async getInitialProps(props){
        return {
          fondid:props.query.fondid
        }
      }

    render(){
        return(
                <Layout>
                    <Header as='h5'><Link route={`/`}>Home</Link> > <Link route={`/fonds`}>Fonds</Link> > 
                    <Link route={`/fonds-details/${this.props.fondid}`}>Fonds Details</Link> > <span className="higlight"> Series List </span>

                    </Header>
                    <SeriesResults fondid={this.props.fondid} />
                </Layout>
            
            )
    }

}
export default Series 