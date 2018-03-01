import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon';
import Email from 'material-ui/svg-icons/communication/email';
import Clear from 'material-ui/svg-icons/content/clear';
import Paper from 'material-ui/Paper';


import Navbar from './Navbar'

export default class Landing extends Component {

 	render() {	

 		const quickInfo = (
 			<div class="quick-info">
 				<p class="email">Email /  <i class="email-value">ericnam860@gmail.com</i></p>
 				<p class="email">Phone /  <i class="email-value">(940)  453 - 9010</i></p>
 			</div>
		);

    	return (
  			<div class="landing">
					<div class="navbar-bar">
						<Navbar />
					</div>
	  				<div class="container">
	  					<div class="profile">
	  						<div class="personal-info">
		  						<p>ericnam860@gmail.com</p>
		  						<p>Dallas, TX</p>
		  						<p>940. 453. 9010</p>
	  						</div>


	  						<p>Hi there! I'm currently working as a developer at PricewaterhouseCoopers. Working with a full stack, I've had exposure
	  						 to many different levels to a technical project, and quite enjoy working with every aspect.</p>

							<p>While I love my current work, I am also passionate
							   about the new world of blockchains and decentralized applications, and in the future 
							   aspire to be a blockchain professional who can deliver innovative and disruptive products 
							   to the world.</p>
	  					</div>
	  					
	  				</div>
  			</div>
    	)
    }
}

// <h1>Software <c1>Developer</c1>  </h1>
//   					<h1>UI/UX <c1>Designer</c1> </h1>
//   					<h1>Food <c1>Eater</c1> </h1>
