import React, {Component} from 'react';
class ColorPicker extends Component{
  constructor(props)
  {
        super(props);
        this.state ={
            color:['red', 'green', 'blue', 'yellow']
        };
  }

  ShowColor(color){
    return {
            backgroundColor:color,
            width:50,
            height: 50,
            display: 'inline-block',
            marginLeft:10

        };
  }

  colorActive(color)
  {
    this.props.onReceiColor(color);
  }

	render(){
        var ElementColor =this.state.color.map((color, index)=>{
            return <div 
                        key={index} style={this.ShowColor(color)}
                        className={this.props.color===color ? 'active' : ''}
                        onClick={()=>this.colorActive(color)}>
                    </div>});
		return (
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color Picker</h3>
                    </div>
                    <div className="panel-body">
                        {ElementColor}
                        <hr/>
                        
                    </div>
                </div>
            </div>
		);
	}
}
export default ColorPicker;