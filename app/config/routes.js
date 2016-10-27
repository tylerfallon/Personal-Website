// Inclue the React library
var React = require('react');

// Include the Router
var Router = require('react-router');
var Route = Router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute	= Router.IndexRoute;

// Reference the high-level components
var Main = require('../components/Main');
var Portfolio = require('../components/Portfolio'); 
var Contact = require('../components/Contact'); 


// Export the Routes
module.exports = (

	/*High level component is the Main component*/
	<Route path='/' component={Main}>

		{/* If user selects Search or Saved show the appropriate component*/}
		<Route path='Portfolio' component={Portfolio} />
		<Route path='Contact' component={Contact} />

		{/*If user selects any other path... we get the Home Route*/}
		<IndexRoute component={Portfolio} />

	</Route>


);