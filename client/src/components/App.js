import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
	render () {
		return ( 
			<div> 
				<BrowserRouter>
					<div>
					</div>
				</BrowserRouter>
			</div> 
		);
	}
}

export default connect(null, null)(App);