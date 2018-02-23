import React, { Component } from 'react'
import Paper from 'material-ui/Paper';


export default class Subsection extends Component {

  renderContent () {
    const style = {
      width: this.props.width
    }

    return(
        <div style={style}>
          <div class='title'>{this.props.title}</div>
          <hr/>
          <h2>{this.props.header}</h2>
          <h3>{this.props.subheader}</h3>
          <p>{this.props.subsubheader}</p>
          <p class="blurb">{this.props.blurb}</p>
        </div>
      );
  }

 	render() {	
    	return (
  			<div class="subsection">
          {this.renderContent()}
  			</div>
    	)
    }
}
