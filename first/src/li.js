import React,{Component} from "react";

class Li extends Component{
    render(){
        let {data,changeCheck,index,delVal}= this.props;
        console.log(data)
        return(<li>
            <input 
            type="checkbox" 
            className="select" 
            onChange={(e)=>{
                changeCheck(e.target.checked,data.id)
            }} />
            <span className={data.isCheck?"line do":"do"} >{data.val}</span>
            <span className="del"
            onClick={()=>{
                delVal(data.id);
            }}
             >X</span>
        </li>)
    }
}
export default Li;