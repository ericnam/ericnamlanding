import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon';
import Reorder from 'material-ui/svg-icons/communication/email';
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
  				<Navbar />
  				<div class="container">
  					<h1>Software <c1>Developer</c1> / </h1>
  					<h1>UI/UX <c1>Designer</c1> /</h1>
  					<h1>Food <c1>Eater</c1> /</h1>
  				</div>
  				<div class="container-lg">
  					{quickInfo}
  				</div>
  			</div>
    	)
    }
}
