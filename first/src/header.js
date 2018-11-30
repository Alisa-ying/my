import React,{Component} from 'react';

export default class Header extends Component{
    componentDidMount(){
        console.log(this.refs.addVal.value);
    }
    render(){
        let {changeVal,data} = this.props;

        return(
            <div className="header">
                <input 
                className="add" 
                placeholder="What need to be done?"
                ref="addVal"
                />
                <button 
                className="addBtn"
                onClick={(e)=>{
                    if(this.refs.addVal.value){
                        changeVal(this.refs.addVal.value)
                    }else{
                        alert("请输入要做事项")
                    }
                    this.refs.addVal.value = ''
                }}
                 >添加</button>
            </div>
        )
    }
}