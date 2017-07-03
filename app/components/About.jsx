var React = require('react');
// var Link = require('react-router');


var About = (props) => {
	return (
		<div className="column small-up-2 medium-up-3">
			<div className="card">
			  <div className="card-divider">
			    <h4 className="text-center">About</h4>
			  </div>
			  <img src="http://www.weatherwizkids.com/wp-content/uploads/2015/02/thermometer1.jpg"/>
			  <div className="card-section">
			    <h4>Weather App</h4>
			    <p>Check your city's weather with our app</p>
			    <ol>
			    	<li>
			    		<a href="https://facebook.github.io/react/">React </a>- I have used react to build this application
			    	</li>
			    	<li>
			    		<a href="https://gitlab.com/shibli16/ReactWeather">My Project in GitLab </a>- I have used react to build this application
			    	</li>
			    </ol>
			  </div>
			</div>
		</div>
	);
}
module.exports  = About;