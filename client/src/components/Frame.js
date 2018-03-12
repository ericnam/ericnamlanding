import React, { Component } from 'react'

export default class Frame extends Component {
	
 	render() {	
    	return (
  			<div class="frame">
				<div class="main-button"></div>
				
				<div class="top-bar">
					<div class="header">ERIC NAM</div>
				</div>
				
				<div class="left-bar">
					<div class="left-bar-content">
						
						
						<div class="rotate">
							<div class="navigator">
								<a class="arrow"><i class="fa fa-chevron-circle-left"></i></a>
								<span class="section-name">HOME</span>
								<a class="arrow"><i class="fa fa-chevron-circle-right"></i></a>
							</div>
							
							
							<div class="links">GITHUB</div>
						</div>
						
						
					</div>
				</div>
  			</div>
    	)
    }
}
