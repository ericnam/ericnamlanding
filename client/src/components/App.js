import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Navbar from './Navbar'

class App extends Component {
	render () {
		return ( 
			<div> 
				<BrowserRouter>
					<MuiThemeProvider>
						<Navbar />
					</MuiThemeProvider>
				</BrowserRouter>
			</div> 
		);
	}
}

export default connect(null, null)(App);