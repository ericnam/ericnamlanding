import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon';
import Reorder from 'material-ui/svg-icons/action/reorder';
import Clear from 'material-ui/svg-icons/content/clear';


export default class Navbar extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	open: false
		};
  	}

  	handleToggle = () => this.setState({open: !this.state.open});

 	render() {
 		const rightNav = (
			<div>
		    	<FlatButton className="navbar-item" label="ABOUT" />
		    	<FlatButton className="navbar-item" label="WORK" />
		    	<FlatButton className="navbar-item" label="CONTACT" />
		    	<FlatButton
		    		className="navbar-item-icon"
			        icon={<Reorder />}
			        onClick={this.handleToggle}
			    />
			</div>
		);	

    	return (
      		<div>
      			<div class="container">
      				<AppBar
					    title="ERIC NAM"
					    className="navbar"
					    showMenuIconButton={false}
					    // iconElementLeft={}
					    iconElementRight={rightNav}
			  		/>
      			</div>
	      		<Drawer width={250} openSecondary={true} open={this.state.open}>
	      			<div className="nav-item-list drawer">
		      			<FlatButton className="navbar-item drawer" label="ABOUT" />
				    	<FlatButton className="navbar-item drawer" label="WORK" />
				    	<FlatButton className="navbar-item drawer" label="CONTACT" />
	      			</div>
			    	<FlatButton
			    		className="navbar-item-icon drawer"
				        icon={<Clear />}
				        onClick={this.handleToggle}
			    	/>
		        </Drawer>
      		</div>
    	)
    }
}
