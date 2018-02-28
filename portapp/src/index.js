import React from 'react'
import ReactDOM from 'react-dom'
/*
setInterval(function(){
	ReactDOM.render(
		<h2>Current time is :{new Date().toLocaleTimeString()}</h2>,
		document.getElementById('root')
		);
}, 1000);
*/


function Cartoon(props){
	return <h1> Hello {props.name} your address is {props.address}. </h1>
}
function Detail(){
	return <div>
		<Cartoon name = 'Ananda' address = 'croydon' />
		<Cartoon name = 'Monoz' address = 'croydon' />
	</div>
}

ReactDOM.render(
	<Detail/>, document.getElementById('root') 
);