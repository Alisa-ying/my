import React,{Component} from 'react';

export default class Footer extends Component{
    render(){
        let {data} = this.props;

        let doneData = data.filter((item)=>{
            console.log(item.isCheck)
            return item.isCheck == false;
        })
        let doData = data.filter((item)=>{
            console.log(item.isCheck)
            return item.isCheck == true;
        })

        return(
            <footer>
                <div className="left">
                    <span className="needNum">{doneData.length}</span>
                    <span>条代办项</span>
                </div>
                <div className="right">
                    <span className="doneNum">{doData.length}</span>
                    <span>条未完成项</span>
                </div>
            </footer>
        )
    }
}