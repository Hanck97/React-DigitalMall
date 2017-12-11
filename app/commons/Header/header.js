import React, {Component} from 'react'
import './header.less'
import {withRouter} from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <header className="header">
                <i onClick={(e)=>this.props.history.goBack()} className={}>

                </i>
                <span></span>
            </header>   
        )
    }
}

export default withRouter(Header)