import React,{Component} from 'react';
import Li from './li';

class ListItem extends Component{
    render(){
        let {data,isShow,changeShow,index}=this.props;
        return (
            <div>
                <h2 className="title" onClick={()=>{
                    changeShow(index)
                }}>{data.name}</h2>
                {isShow?(<ul>
                {data.list.map((item,index)=>{
                    return <Li data={item} key={index} />
                })}
                </ul>):''}
               
            </div>
        )

    }
}
export default ListItem;