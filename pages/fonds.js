import React, { Component } from 'react'
import {Link} from '../routes'
import Layout from '../components/Layout'
import FondsCardList from '../components/FondsCardList'
import FondSearch from '../components/FondSearch'
import { Header, Divider } from 'semantic-ui-react'
import '../scss/style.scss'


class Fonds extends Component{
    render(){
        return(
                <Layout>
                	<Header as='h5'> <Link route={`/`}><a>Home</a></Link> > <span className="higlight">Fonds List</span></Header>
                    <FondsCardList />
                    <Divider />                 
                    <FondSearch />          
                </Layout>
            
            )
    }

}
export default Fonds 