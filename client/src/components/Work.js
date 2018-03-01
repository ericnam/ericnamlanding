import React, { Component } from 'react'

import Subwork from './Subwork'

export default class Work extends Component {

 	render() {	
		var onyxLeft = "Project ONYX is a decentralized application utilizing test driven development to freelance software developers on the ethereum blockchain.";
		var onyxRight = "NodeJS, HTML, CSS, JS";
		
		const onyxContent = (
			<div></div>
		);
		
		var emailyLeft = "Emaily is a web application that serves users by sending out mass emails to their followers or customers. Developed with Udemy course.";
		var emailyRight = "NodeJS, Express, React, Redux, HTML, CSS";
		
		const emailyContent = (
			<div></div>
		);
		
    	return (
			
  			<div class="work">
				<div class="container">
					<Subwork 
						title="01 / Project ONYX"
						url="projectonyx.io"
						date="2017"
						left={onyxLeft}
						right={onyxRight}
						content={onyxContent}
					/>
					
					<br />
					<br />
					
					<Subwork 
						title="02 / Emaily"
						url=""
						date="2017"
						left={emailyLeft}
						right={emailyRight}
						content={emailyContent}
					/>
				</div>
			</div>
    	)
    }
}
