import React, { Component } from 'react'
import Layout from '../components/Layout'
import FondsCardList from '../components/FondsCardList'
import FondSearch from '../components/FondSearch'
import { Header, Divider } from 'semantic-ui-react'
import '../scss/style.scss'


class Fonds extends Component{
    render(){
        return(
                <Layout>
                	<Header as='h3'><a href="./">Home</a> > <span className="higlight">Fonds List</span></Header>
                    <FondsCardList />
                    <Divider />                 
                    <FondSearch />          
                </Layout>
            
            )
    }

}
export default Fonds 