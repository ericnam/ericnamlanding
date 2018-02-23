import React, { Component } from 'react'
import Paper from 'material-ui/Paper';

import Subsection from './Subsection'


export default class Section extends Component {

 	render() {	
 		const MISBlurb = (
 			"Learned languages such as Visual Basic, HTML, CSS, ASPX, Javascript, JQuery, Bootstrap, SQL, Java. Participated in case studies and case competitions, as well as student orgs like ABSA, KUSA and BEGlobal."
		);

		const CSBlurb = (
 			"Learned Python and algorithms commonly used in software engineering. Took courses related to cryptography and creating your own language, as well."
		);

    	return (
  			<div class="section">
  				<div class="section-header">
  					<div class="section-header-rotate">
  						EDUCATION 
  					</div>
  				</div>

  				<div class="container">
  					<div class="section-content">
  						<Subsection 
  							title="University of Texas At Austin" 
  							header="B.B.A."
  							subheader="Management Information Systems"
  							subsubheader="2012-2016"
  							blurb={MISBlurb}
  							width="350px"
						/>
						<Subsection 
  							title="_" 
  							header="Certification"
  							subheader="Elements of Computer Science"
  							subsubheader="2013-2015"
  							blurb={CSBlurb}
  							width="250px"
						/>
  					</div>
  				</div>

  			</div>
    	)
    }
}
