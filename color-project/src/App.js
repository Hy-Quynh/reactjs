import React, {Component} from 'react';
import './App.css';
import ColorPicker from './component/ColorPicker';
import Reset  from './component/Reset';
import Result from './component/Result';
import Size from './component/Size';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
        color: 'red',
        fontSize: 12
    };
    this.setColor=this.setColor.bind(this);
    this.setSize=this.setSize.bind(this);
    this.resetSizeAndColor=this.resetSizeAndColor.bind(this);
  }

  setColor(value)
  {
    this.setState({
        color : value
    });
  }

  setSize(value)
  {
    this.setState({
        fontSize: (this.state.fontSize +value >=8 && this.state.fontSize +value <=32 ? this.state.fontSize + value : this.state.fontSize)
    });
  }

  resetSizeAndColor(value)
  {
      if(value){
        this.setState({
            color: 'red',
            fontSize: 12
        });
      }   
  }

  render() {
    return (
        <div className="container mt-50">
             <div className="row">
                <ColorPicker color={this.state.color} onReceiColor={this.setColor} />          
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <Size size={this.state.fontSize} 
                          setSize={this.setSize}/>
                    <Reset onDefault={this.resetSizeAndColor} />            
                </div> 
                <Result color={this.state.color} 
                         size={this.state.fontSize} />                    
            </div>    
    </div>
    );
    
  }
}

export default App;
