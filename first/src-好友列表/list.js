import React, { Component } from 'react';
import ListItem from './listitem'

class List extends Component {
    state={
        isShow:[
            true,
            false,
            false
        ]
    }
    changeShow=(index)=>{
        let {isShow} = this.state;
        if(isShow[index]){
            isShow[index] = false;
        }else{
            isShow= isShow.map(()=>false);
            isShow[index] = !isShow[index];
        }
     
        this.setState({
            isShow
        })

    }
    render() {
        let {data}=this.props;
        return (
        <div>
            {
               Object.values(data).map((item,index)=>{
                    return <ListItem 
                            key= {index} 
                            data={item} 
                            isShow={this.state.isShow[index]} 
                            index={index} 
                            changeShow={this.changeShow}/>
                }) 
            }
        </div>
    );
    }
}
  
export default List;