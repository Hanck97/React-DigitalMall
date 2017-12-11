import React,{Component} from 'react';
import './backTop.less'


class BackTop extends Component {

componentDidMount(){
        window.onScroll = ()=>{
            let sTop = document.documentElement.scrollTop || document.body.scrollTop;
            let winH=document.documentElement.clientHeight || document.body.clientHeight;
            let back= this.refs.back;
            let eleTop=getComputedStyle(back,null).top;
            back.style.display =sTop+eleTop>=winH?'block' : 'none';
        }

};

    // 返回顶部
    goBackTop = (e) => {
        let ele=e.target;
        console.log(ele);
        clearInterval(ele.timer);
        let win = document.documentElement || document.body;
        let duration = win.scrollTop;
        let step = duration / 30;
        console.log(win.scrollTop);
        ele.timer = setInterval(() => {
            duration -= step;
            if (duration <= 0) {
                clearInterval(ele.timer);
                win.scrollTop = 0;
            }
            win.scrollTop = duration;
        }, 10)

};

render(){
    return (
        <div ref="back" className="go-back" onClick={this.goBackTop} >
            <i className="iconfont icon-feiji"></i>
        </div>
    );
}

}


export default BackTop;