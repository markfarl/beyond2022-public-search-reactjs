import React, {Component} from 'react'
import { Container, Input } from 'semantic-ui-react'


class Header extends Component{
    render(){
        return(
            <Container fluid>
                <div className="nav-bar">
                    <Container>
                        <img className="logo" src="/static/images/beyond-logo.jpg" />
                        <Input className='icon' icon='search' placeholder='Search...' />
                    </Container>
                </div>
            </Container>
            )
    }

}

export default Header