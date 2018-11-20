import React, { Component } from 'react'
import Layout from '../components/Layout'
import FondsDetails from '../components/FondsDetails'
import FondSearch from '../components/FondSearch'
import { Header, Divider } from 'semantic-ui-react'
import '../scss/style.scss'


class Fonds extends Component{
    render(){
        return(
                <Layout>
                	<Header as='h3'><a href="./">Home</a> > <a href="./fonds">Fonds</a> > <span className="higlight">Fonds Details</span></Header>
                    <FondsDetails />
                    <Divider />                 
                    <FondSearch />          
                </Layout>
            
            )
    }

}
export default Fonds 