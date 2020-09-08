import React, {Component} from 'react';

class Header extends Component{
	render(){
		return(
			<div>
			<div className="navbar">
				<div className="container-fluid">
					<a className="navbar-brand" href="aaaa">Title</a>
					<ul className="nav navbar-nav">
						<li className="active">
							<a href="aaaa">Home</a>
						</li>
						<li>
							<a href="aaaa">Link</a>
						</li>
					</ul>
				</div>
			</div>
			</div>

			);
	}
}

export default Header;