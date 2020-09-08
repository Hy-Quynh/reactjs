import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props)
    this.state={
        txtUserName:'',
        txtPassword:'',
        txtTextArea:'',
        gender:0,
        rate:'no',
        status:false
    }
    this.defaultValue=this.defaultValue.bind(this);
    this.defaultSubmit=this.defaultSubmit.bind(this);
  }

  defaultValue(event)
  {
    var target= event.target;
    var name= target.name;
    var value= target.type==='checkbox'? target.checked : target.value;
    this.setState({
        [name]: value
    });
  }

  defaultSubmit(event)
  {
    event.preventDefault();
    console.log(this.state);
  }
  
  render(){
  return (
    <div className="container-fluid">
    <div className="row">
    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8"> 
    <div className="panel panel-primary">
              <div className="panel-heading">
                  <h3 className="panel-title">Form</h3>
              </div>
              <div className="panel-body">    
   
    <form onSubmit={this.defaultSubmit}>
    
        <div className="form-group">
            <label>UserName:</label>
            <input type="text" className="form-control" placeholder="Vui long nhap ten" 
                    name="txtUserName"
                    onChange={this.defaultValue}
                    />
            <label>password</label>
            <input type="password" className="form-control" placeholder="Vui long nhap mat khau"
                    name="txtPassword"
                    onChange={this.defaultValue}
                    />
            <label>Comment</label>
            <textarea className="form-control" rows="3" placeholder="Vui long nhap noi dung"
                     name="txtTextArea"
                     onChange={this.defaultValue}
                      ></textarea>
            <label>Giới tính </label>
            <select 
                     name="gender" 
                     className="form-control"
                     value={this.state.gender}
                     onChange={this.defaultValue}
            >
                <option value={0} >Nam</option>
                <option value={1}>Nữ</option>
            </select>
             <label>Đánh giá </label>
            <div className="radio">
                <label>
                    <input 
                        type="radio"
                        name='rate' 
                        value='yes'
                        onChange={this.defaultValue}
                        checked={this.state.rate}/>
                    Hài lòng
                </label>
                <br />
                 <label>
                    <input 
                        type="radio" 
                        name='rate'
                        value='no'
                        onChange={this.defaultValue}
                        checked={this.state.rate}/>
                    Không hài lòng 
                </label>
            </div>  
            <label>Trạng thái </label>
            <div className="checkbox">
                <label>
                    <input 
                        type="checkbox" 
                        value={true}
                        name='status'
                        onChange={this.defaultValue}
                        checked={this.state.status===true}
                        />
                    Checkbox
                </label>
            </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    </form>  
         </div>
          </div>  
    </div> 
      </div>
     </div>
  );
}
}

export default App;
