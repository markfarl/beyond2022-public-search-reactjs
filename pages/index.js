import React, { Component } from 'react'
import Layout from '../components/Layout'
import BrowseCardList from '../components/BrowseCardList'
import SearchBox from '../components/SearchBox'
import { Segment, Header, Divider } from 'semantic-ui-react'
import '../scss/style.scss'

class Home extends Component{
    render(){
        return(
                <Layout>
                    <BrowseCardList />
                    <Divider />                 
                    <SearchBox />          
                </Layout>
            
            )
    }

}
export default Home 