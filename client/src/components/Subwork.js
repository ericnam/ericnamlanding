import React, { Component } from 'react'
import Paper from 'material-ui/Paper';

export default class Subwork extends Component {

 	render() {	
    	return (
			<div class="subwork">
				<div class="header">
					<div class="title">{this.props.title}</div>
					<div class="url">
						<a href={this.props.url}>{this.props.url}</a>
					</div>
					<p class="date">{this.props.date}</p>
				</div>
				<div class="description">
					<div class="description-left">
						<p>
							{this.props.left}
						</p>
					</div>
					<div class="description-right">
						<p>{this.props.right}</p>
					</div>
				</div>
				<hr/>
				<div class="content">
					<div class="tablet">
						hello
					</div>
					<div class="phone">
						hello
					</div>
				</div>
			</div>
    	)
    }
}
