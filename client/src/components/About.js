import React, { Component } from 'react'
import Paper from 'material-ui/Paper';

import Navbar from './Navbar'

export default class About extends Component {

 	render() {	
 		const mainContent = (
			<div class="main">
				<img src={require('../public/img/ericnam_colorado.jpg')} class="main-img" /> 
				<div class="main-text">
					<h1>Hey guys, it's me. Blah Blah Blah Blah.</h1>
					<p>This is a lot of content about myself. stuff about myself. This is a lot of cont
					ent about myself. stuff about myself.This is a lot of content about myself. stuff abo
					ut myself.This is a lot of content about myself. stuff about myself.This is a lot of 
					content about myself. stuff about myself.</p>
					<p>This is a lot of content about myself. stuff about myself. This is a lot of cont
					ent about myself. stuff about myself.This is a lot of content about myself. stuff abo
					ut myself.This is a lot of content about myself. stuff about myself.This is a lot of 
					content about myself. stuff about myself.</p>
					<p>This is a lot of content about myself. stuff about myself. This is a lot of cont
					ent about myself. stuff about myself.This is a lot of content about myself. stuff abo
					ut myself.This is a lot of content about myself. stuff about myself.This is a lot of 
					content about myself. stuff about myself.</p>
				</div>
			</div>
 		);

    	return (
  			<div class="about">
  				<div class="container-lg">
  					<Paper zDepth={1} children={mainContent} />
  				</div>
  			</div>
    	)
    }
}
