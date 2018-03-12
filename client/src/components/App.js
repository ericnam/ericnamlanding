import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Frame from './Frame'
import Section from './Section'
import Work from './Work'
import Navbar from './Navbar'

class App extends Component {
	render () {
		return ( 
			<div> 
				<MuiThemeProvider>
				
					<div class="navbar">
						<div class="header">
							<div class="header-content">ERIC NAM</div>
						</div>
						<div class="sections">
							<div class="section0 menu-button">
								<div class="section-header"><a class="icon"><i class="fa fa-chevron-down"></i></a></div>
							</div>
							<div class="menu">
								<div class="section1">
									<div class="section-header">WORK</div>
								</div>
								<div class="section2">
									<div class="section-header">ABOUT</div>
								</div>
								<div class="section3">
									<div class="section-header">CONTACT</div>
								</div>
							</div>
						</div>
					</div>
				
					<div class="container">
					
						
						
						<div class="content">
							Hello
						</div>
					
					</div>
					
					

					
				</MuiThemeProvider>
			</div> 
		);
	}
}

export default connect(null, null)(App);





//<div class="navbar-bar">
//							<Navbar />
//						</div>
//						<Landing />
//						<Work />


// <div class="test">
// 							<div class="texture0">
// 								hello
// 							</div>
// 						</div>
