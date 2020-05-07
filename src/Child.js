import React from 'react';
import './Child.css';

function Child(props) {
	function getRandomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	return (
		<div className="container">
			<p className="circle" style={{ backgroundColor: props.color }} />
			<button onClick={() => props.setColor(getRandomColor)}>Randomly change my color!</button>
		</div>
	);
}

export default Child;
