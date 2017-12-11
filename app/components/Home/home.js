import React, {Component} from 'react';
import Carousel from "../../commons/Carousel/index";
import './home.less'
import Category from "./Category/index";
import Search from "../../commons/Search/index";
import Header from "../../commons/Header/index"

import {connect} from 'react-redux'
import actions from '../../actions/list'

@connect(//@装饰器  和原来写法一样
    state => state.list,
    actions,
)


export default class Home extends Component{
    constructor(){
        super();
        this.state={
            swiper:[],
            list:[]
        };
    }
    componentWillMount(){
        fetch('http://127.0.0.1:3000/swiper', {
            method: 'get',
            credentials: 'include',
            headers: {
                "Accept": "application/json"
            }
        }).then(res => res.json()).then(data=>{
            this.setState({swiper:[...data]})
        });
    }

    render(){

        return(
            <div>
                <Header  title="浙师数码商城"/>
                <div className="container">
                    <Carousel  sliders={this.state.swiper}/>
                    <div className="quick-link-box">
                        <a href="//h5.m.jd.com/active/2g6zWZQ7dwTGDRsMg19BdN1U5T5o/index.html" className="item-0"><span className="link-ico"></span><span>营业厅</span></a>
                        <a href="//m.huishou.jd.com" className="item-1"><span className="link-ico"></span><span>以旧换新</span></a>
                        <a href="//chongzhi.m.jd.com/" className="item-2"><span className="link-ico"></span><span>充值中心</span></a>
                        <a href="//sale.jd.com/m/act/Fa7X2kQ4AUC.html" className="item-3"><span className="link-ico"></span><span>精选配件</span></a>
                        <a href="//m.group.jd.com/circle/20000151/20000427.htm" className="item-4"><span className="link-ico"></span><span>校园活动</span></a>
                    </div>
                    <div className="home-search">
                        <Search/>
                    </div>
                    <div className="link-list">
                        <a href="#">
                            <img src="https://m.360buyimg.com/babel/s746x219_jfs/t7327/30/3470276750/119016/622ae49d/59e08132N958fd6e5.jpg!q50.jpg.webp" alt=""/>
                        </a>
                        <a href="#">
                            <img src="https://m.360buyimg.com/babel/s746x219_jfs/t10492/239/1248088120/78169/f60b97b1/59ded73eNf8d61333.jpg!q50.jpg.webp" alt=""/>
                        </a>
                        <a href="#">
                            <img src="https://m.360buyimg.com/babel/s746x219_jfs/t8314/171/2395422856/146692/22434b60/59cdbf4fN8bba0b4a.jpg!q50.jpg.webp" alt=""/>
                        </a>
                    </div>
                    {/*<Category title="电脑专区"/>*/}
                </div>
            </div>
        )
    }
}