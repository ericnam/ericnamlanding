import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Frame from './Frame'
import Section from './Section'
import Work from './Work'
import Navbar from './Navbar'
import Blockbar from './Blockbar'

class App extends Component {
	render () {
		return ( 
			<div> 
				<MuiThemeProvider>
				
					<div class="navbar">
						<div class="navbar-fixed">
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
					</div>
				
					<div class="container">
						<div class="content">
							
							<h1 class="main">ERIC NAM</h1>
							<h2>Full-stack Developer / UI Enthusiast</h2>

							<div class="social-icons">
								<a href="#" class="icon-holder"><img class="icon" src={require('../public/img/github.svg')}/></a>
								<a href="#" class="icon-holder"><img class="icon" src={require('../public/img/linkedin.svg')}/></a>
								<a href="#" class="icon-holder"><img class="icon" src={require('../public/img/medium.svg')}/></a>
							</div>

							<p>ericnam860@gmail.com</p>
							<p>Dallas, TX</p>

						</div>
					</div>

					<div class="work">
						<div class="container">
							<div class="display">
								<img class="logo" src={require('../public/img/ONYXlogo.svg')} />
								<img class="screenshot" src={require('../public/img/ProjectONYXMain.png')} />
							</div>

							<div class="description">
								<div class="inner">
									<h1>01. Project ONYX</h1>
									<h2>Web / Front-end Dev</h2>
									<p>Project ONYX is a decentralized application utilizing test driven development to freelance software developers on the ethereum blockchain.</p>
									<br />
									<br />
										<p>REACT.JS</p>
										<Blockbar total="20" active="4"/>
										<p>HTML</p>
										<Blockbar total="20" active="14"/>
										<p>CSS</p>
										<Blockbar total="20" active="14"/>
										<p>JAVASCRIPT</p>
										<Blockbar total="20" active="12"/>
										<p>NODEJS</p>
										<Blockbar total="20" active="6"/>
								</div>
							</div>


							
						</div>
					</div>

					<div class="about">
						<div class="container">
							<div class="section">



								
							</div>
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



// <div class="section-header">
// 									<h1>EDUCATION</h1>
// 								</div>
// 								<div class="section-content">
// 									<h1>B.B.A. in Management Information Systems</h1>
// 									<h2>University of Texas at Austin</h2>

// 									<h1>Certificate in the Elements of Computer Science</h1>
// 									<h2>University of Texas at Austin</h2>
// 								</div>
// 								<div class="section-header">
// 									<h1>EXPERIENCE</h1>
// 								</div>
// 								<div class="section-content">
// 									<h1>PricewaterhouseCoopers</h1>
// 									<h2>University of Texas at Austin</h2>

// 									<h1>Intel Corporation</h1>
// 									<h2>University of Texas at Austin</h2>

// 									<h1>Trepantech Ltd.</h1>
// 									<h2>University of Texas at Austin</h2>
// 								</div>