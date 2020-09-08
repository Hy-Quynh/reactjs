import React, {Component} from 'react';
import Body from './product/body';
import './App.css';
import Header from './product/Header';

class App extends Component{  
    onClick(text)
    {
        console.log(text);
    }
    Find=() =>
    {
        console.log('San pham ban tim la' + this.refs.name.value);
    }

    constructor(props){
        super(props);
        this.state={
            member :[
            {
                key:1,
                name: 'Nguyen Van A',
                age: 19,
                status: false
             } ,
             {
                key:2,
                name: 'Nguyen Van B',
                age: 18,
                status: true
             } ,
             {
                key:3,
                name: 'Nguyen Van C',
                age: 20,
                status: true
             } 

            ],
            isActive:true

        };
    }
    onSetState=()=>
    {
        if(this.state.isActive){
            this.setState({isActive:false});
        }
        else
        {
            this.setState({isActive:true});
        }
    }


  render() {
    var object=[
    {
        key:1,
        name: 'Nguyen Van A',
        age: 19,
        status: false
     } ,
     {
        key:2,
        name: 'Nguyen Van B',
        age: 18,
        status: true
     } ,
     {
        key:3,
        name: 'Nguyen Van C',
        age: 20,
        status: true
     } 
     ];

     var elements=object.map((object, index)=>{
        let results ='';
        if(object.status)
        {
        results= <Body key={object.key}
                     name={object.name}
                     age ={object.age}
                />
         }
         return results;
     });

     var member=this.state.member.map((object, index)=>{
                return  <tr key={object.key}>
                            <td>{object.name}</td>
                            <td>{object.age}</td>
                         </tr>
     });




    return (
  
    <div>
    <Header />
        <div className="form-group">
            <input type="text" className="form-control" id="" placeholder="Input field" ref="name"/>
        </div>       
        <button type="submit" className="btn btn-primary" onClick={this.Find}>Timkiem</button>

    <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        {elements}
        <button type="button" className="btn btn-default" onClick={()=>{this.onClick('chon thanh cong')}}>chọn ngay</button>
            
        </div>
        
    </div>
    <table className="table table-hover">
        <thead>
            <tr>
                <th>Ten</th>
                <th>Tuoi</th>
            </tr>
        </thead>
        <tbody>
                {member}
        </tbody>
    </table>
    <button type="button" className="btn btn-default" onClick={this.onSetState}>Active: {this.state.isActive?'true' : 'false'}</button>

    </div>
    );
}
}

export default App;
