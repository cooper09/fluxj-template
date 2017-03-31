var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
//cooper s - add subcomponents here

var ComponentOne = require('./ComponentOne.js');
var ComponentTwo = require('./ComponentTwo.js');

function getAppState(){
	console.log("App.getAppState: ", AppStore.getOneVisible());
	return {
		//app: AppStore.getState(),
		pages: AppStore.getPages(),
		oneVisible: AppStore.getOneVisible(),
		twoVisible: AppStore.getTwoVisible(),
		getBgImg: AppStore.getBgImg()
	}
}

var App = React.createClass({

	getInitialState: function(){
		return getAppState();

	},

	componentDidMount: function(){
		AppStore.addChangeListener(this._onChange);
	},

	componentUnmount: function(){
		AppStore.removeChangeListener(this._onChange);
	},
	handleBtnClick: function() {
      console.log('APP - Handle my button click: ');
      AppActions.myEvent('Button One click');
    },
    handleBtnClick2: function() {
      console.log('APP - Handle my button click: ');
      AppActions.showTwo('Button Two click');
    },
	render: function(){
		return(
			<div>
				<p>React Flux Template</p>
				 <button onClick={this.handleBtnClick}>EventButton One</button>
				 <button onClick={this.handleBtnClick2}>EventButton Two</button>
				<ComponentOne  visible={this.state.oneVisible} pages={this.state.pages }/>
				<ComponentTwo  visible={this.state.twoVisible} pages={this.state.pages }/>

			</div>
		);
	},

	// Update view state when change is received
	_onChange: function(){
		console.log("A change has occured....")
		this.setState(getAppState());
	}
});

module.exports = App;