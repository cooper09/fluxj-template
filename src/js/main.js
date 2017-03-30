var App = require('./components/App');
var React = require('react');
var ReactDOM = require('react-dom');

var PageData = require('./PageData');
var AppAPI = require('./utils/appAPI');

PageData.init();
AppAPI.getPageData();

ReactDOM.render(
	<App />,
	document.getElementById('app')
);