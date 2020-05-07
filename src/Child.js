import React from 'react';
import './Child.css';

//I call this the 'Art of Color Change and Simple Change'
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
			<div className="circle" style={{ backgroundColor: props.color }} />
			<div className="square" style={{ backgroundColor: props.color }} />
			<div className="trapezoid" style={{ backgroundColor: props.color }} />
			<button
				className="randomColor"
				onClick={() => {
					props.setColor(getRandomColor);
				}}
			>
				Randomly change my color!
			</button>

			<div>{props.blink ? 'I blinked!' : 'I can see!'}</div>
		</div>
	);
}

export default Child;
