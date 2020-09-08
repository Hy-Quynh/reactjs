import React, {Component} from 'react';

class Body extends Component{

	Add=()=>{
		alert('Chon thanh cong' + this.props.name);
	}

	constructor(props){
		super(props);
		this.Delete=this.Delete.bind(this);
	}
	Delete(){
		alert('Xoa thanh cong' +this.props.name);
	}
	render(){
		return(
           
			<div>
			<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<div className="thumbnail">
					<img alt="iphone" />
					<div className="caption">
						<h3>{this.props.name}</h3>
						<p>
							{this.props.age}
						</p>
					
					</div>
				</div>
				<button type="button" className="btn btn-default" onClick={this.Add}>Click</button>
				<button type="button" className="btn btn-default" onClick={this.Delete}>delete</button>
			</div>	
			</div>

            
			);
	}
}

export default Body;