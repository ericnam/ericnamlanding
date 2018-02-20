import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon';
import Reorder from 'material-ui/svg-icons/action/reorder';

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
	      		<Drawer width={200} openSecondary={true} open={this.state.open} >
		        </Drawer>
      		</div>
    	)
    }
}
