import React, { Component } from 'react'

export default class Blockbar extends Component {
 	render() {	
 		var totalNumber = this.props.total;
 		var activeNumber = this.props.active;

 		var blockbar = [];
 		for (var i = 0; i < activeNumber; i ++) {
 			blockbar.push(<div class="block active"></div>);
 		}
 		for (var i = 0; i < totalNumber - activeNumber; i++) {
 			blockbar.push(<div class="block"></div>);
 		}
		
    	return (
    		<div class="blockrow"> {blockbar} </div>
    	)
    }
}
