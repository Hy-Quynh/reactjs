import React, {Component} from 'react';


class Reset extends Component{
	onReset=()=>
	{
		this.props.onDefault(true)
	}
	render(){
		return (
			<button type="button" className="btn btn-success" onClick={this.onReset}>Reset</button>
        );
	}
}
export default Reset;