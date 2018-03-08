import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Landing from './Landing'
import Section from './Section'
import Work from './Work'
import Navbar from './Navbar'

class App extends Component {
	render () {
		return ( 
			<div> 
				<MuiThemeProvider>

					<div class="texture0">
					</div>


					<div class="main-button"></div>
					<div class="left-bar">
						<div class="main-button"></div>

						<div class="left-bar-content">
							<div class="rotate">
								<div class="navigator">ABOUT</div>
								<div class="links">GITHUB</div>
							</div>
						</div>
					</div>

					<div class="right-bar">
					</div>

					<div class="top-bar">
						<div class="header">ERIC NAM</div>
					</div>

					<div class="bottom-bar">
					</div>


					<div class="content">
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