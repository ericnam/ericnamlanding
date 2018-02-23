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
  						EXPERIENCE 
  					</div>
  				</div>

  				<div class="container">
  					<div class="section-content">
  						<Subsection 
  							title="PricewaterhouseCoopers" 
  							header="Experienced Software Associate"
  							subheader="Master Limited Partnerships"
  							subsubheader="2012-2016"
  							blurb={MISBlurb}
  							width="350px"
						/><Subsection 
                title="Project ONYX" 
                header="Software Intern"
                subheader="Intel Austin"
                subsubheader="2013-2015"
                blurb={CSBlurb}
                width="250px"
            />
						<Subsection 
  							title="Intel Corporation" 
  							header="Software Intern"
  							subheader="Intel Austin"
  							subsubheader="2013-2015"
  							blurb={CSBlurb}
  							width="250px"
						/>
            <Subsection 
                title="Trepantech" 
                header="Software Intern"
                subheader="Shanghai Based Startup"
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
