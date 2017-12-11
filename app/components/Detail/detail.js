import React, {Component} from 'react';
import './detail.less';
import Header from "../../commons/Header/index";
import DetailTab from "./DetailTab/detailTab";
import DetailNav from "./DetailNav/detailNav";
import Carousel from "../../commons/Carousel/index";

export default class Detail extends Component {
    constructor() {
        super();
        this.state = {liked: false}
    }

    handleClick = () => {
        this.setState({liked: !this.state.liked})
    };

    render() {
        console.log(this.props.location.state.item);
        let {album} = this.props.location.state.item;
        return (
            <div>
                <Header title="商品详情" icon="iconfont icon-fanhui"/>
                <div className="container detail">
                    <Carousel sliders={album}/>
                    <div className="detail-price">
                        <span className="price">

                        </span>
                        <div className="liked">
                            <i onClick={this.handleClick}
                               className={this.state.liked ? 'iconfont icon-shoucang1' : 'iconfont icon-shoucang'}> </i>
                        </div>
                    </div>
                    <DetailTab item={this.props.location.state.item}/>
                </div>
                <DetailNav/>
            </div>

        )
    }
}