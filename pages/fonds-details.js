import React, { Component } from 'react'
import {Link} from '../routes'
import Layout from '../components/Layout'
import FondsDetails from '../components/FondsDetails'
import FondSearch from '../components/FondSearch'
import { Header, Divider } from 'semantic-ui-react'
import '../scss/style.scss'


class Fonds extends Component{

    static async getInitialProps(props){
        const id = props.query.id
        return {
          id:id
        }
      }

    render(){
        return(
                <Layout>
                	<Header as='h5'><Link route={`/`}>Home</Link> > <Link route={`/fonds`}>Fonds</Link> > <span className="higlight">Fonds Details</span></Header>
                    <FondsDetails id={this.props.id}/>
                    <Divider />                 
                    <FondSearch />          
                </Layout>
            
            )
    }

}
export default Fonds 