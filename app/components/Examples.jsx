var React = require('react');
var {Link} = require('react-router');


var Examples = (props) => {
		return (
			<div>
				<h1 className="text-center">Examples </h1>
				<p>Here are some examples to try out:</p>
				<ol>
					<li>
						<Link to="/?loaction=Dhaka">Dhaka</Link>
					</li>
					<li>
						<Link to="/?loaction=Chittagong">Chittagong</Link>
					</li>
				</ol>
			</div>
			);
	};

module.exports  = Examples;