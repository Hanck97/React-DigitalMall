import React, {Component} from 'react'
import ReactSwipe from 'react-swipe'
import './carousel.less'


class Carousel extends Component {
    constructor(){
        super();
        this.state = {
            index:0
        };
    }

    render(){
        let options = {
            continuous:true,
            auto:1000,
            disableScroll:true,
            callback:(index)=>{
                this.setState({index})
            }
        };
      

    return(
        <div className="sliders">
        {
            <ReactSwipe className="carouse1" swipeOptions={options}>
            </ReactSwipe>
        }
        </div>
    )
} 
}