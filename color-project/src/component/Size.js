import React, {Component} from 'react';

class Size extends Component{
	
	setSize(value)
	{
         this.props.setSize(value);
	}
	render(){
		return (
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Size:{this.props.size}px</h3>
                    </div>
                    <div className="panel-body">
                    <button type="button" className="btn btn-success" onClick={()=>this.setSize(-2)}>Giam</button>
                    <button type="button" className="btn btn-success" onClick={()=>this.setSize(2)}>Tang</button>
                    
                        
                    </div>
                </div>
		);
	}
}
export default Size;

