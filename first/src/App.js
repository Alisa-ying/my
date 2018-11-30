import React,{Component} from "react";
import Li from './li';
import Header from './header';
import Footer from './footer';

class App extends Component{
    state ={
        data:[
            // {
            // id:'',
            // val:'',
            // isCheck:false
            // },
            { 
            id:1,
            val:1111,
            isCheck:false
            },
            { 
            id:2,
            val:2222,
            isCheck:false
            }
        ]
    }
    //添加数据
    changeVal=(value)=>{
        console.log(value)
        this.setState({
            data:[
                ...this.state.data,
                { 
                id:Date.now(),
                val:value,
                isCheck:false
                }  
            ]
        })
    }
    //改变checkbox状态
    changeCheck=(isCheck,id)=>{
        let {data} = this.state;
        let nowData = data.filter((item)=>{
            return item.id == id;
        })
        nowData[0].isCheck = isCheck;
        this.setState({
            data
        })
    }
    //删除数据
    delVal=(id)=>{
        let {data}=this.state;
        data = data.filter((item)=>{
            return item.id !=id;
        })
        this.setState({
            data
        })
    }
    //处理数据
    
    render(){
        let {data} = this.state;
        return (<div className="wrap">
            <h2>Todos</h2>
            <Header changeVal={this.changeVal} data={data} />
            <ul className="cons" >
            {
                data.map((item,index)=>{
                    return(
                        <Li data={item} 
                        key={index} 
                        index={index}
                        changeCheck={this.changeCheck}
                        delVal={this.delVal}
                         />
                    )
                })
            }
            </ul>
            <Footer data={data}/>
        </div>)
    }
}
export default App;
