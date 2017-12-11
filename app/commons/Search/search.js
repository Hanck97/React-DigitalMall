import React, {Component} from 'react';
import './search.less'



class Search extends Component {
    constructor(){
        super();
        this.state = {
            val:''
        }
        handleChange= (e) =>{
            let val = e.target.value;
            this.setState({val});
            //////////////////////
        }
    }


    render(){
        return(
            <div className="">
                <input value={this.state.val} onChange={this.handleChange.bind(this)} type="text" placeholder="热搜商品"/>
                <i className="iconfont icon-fangdajing"></i>
            </div>    
        )
    }





}