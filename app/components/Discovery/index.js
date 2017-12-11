import React, {Component} from 'react';
import Header from '../../commons/Header'
let news = require('../../../static/images/news.jpg')
export default class Discovery extends Component{
    render(){
        return(
            <div className="discovery">
                <Header title="探索·发现"/>
                <div className="container">
                    <img src={news} alt=""/>
                </div>
            </div>
        )
    }
}