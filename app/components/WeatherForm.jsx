var React = require('react');


var WeatherForm = React.createClass({
	render: function () {
		return (
		<form >
			<div>
				<input type="text" ref="cityName" placeholder="Enter  City name"/>

			</div>
			<div>
				<button>Get Weather</button>
			</div>
		</form>
			);
	}
});

module.exports  = WeatherForm;

//http://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=32fda045624212c4adcd9cecee797c32&units=metric