import React, { Component } from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import {Container} from 'semantic-ui-react'

class Layout extends Component{
	render(){
		return(
			<div className="body">
				<Head>
					<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
				</Head>

				<Header />
				<Container className="main">
					{this.props.children}
				</Container>
			</div>

			)
	}
}
export default Layout