var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
//cooper s - add subcomponents here

var ComponentOne = require('./ComponentOne.js');
var ComponentTwo = require('./ComponentTwo.js');
var BgHandler = require('./BgHandler.js');

function getAppState(){
	console.log("App.getAppState: ", AppStore.getOneVisible());
	return {
		//app: AppStore.getState(),
		pages: AppStore.getPages(),
		oneVisible: AppStore.getOneVisible(),
		twoVisible: AppStore.getTwoVisible(),
		bgImg: AppStore.getBgImg()
	}
}

var App = React.createClass({

	getInitialState: function(){
		return getAppState();

	},

	componentDidMount: function(){
		AppStore.addChangeListener(this._onChange);
		// cooper  - set the background imag
	 
//	 var bgImg = "img/image3.jpg";
	
	 // cooper s - here we need load a different background image with each load. 
	 //   bgImg is my state variable for the image to use.
	 AppActions.onLoad();
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
	closeBtnClick: function() {
		console.log('Time for parent to close the window...');
		AppActions.closeMe('Close Window');
	},
	render: function(){
		//set the background image
		var imgUrl = this.state.bgImg;
		//console.log("App render -  imgUrl: " + imgUrl );

		var divStyle = {
			backgroundImage: 'url(' + imgUrl + ')',
			backgroundSize: 'cover',
			color: 'red',
			padding: '2em'
		}

		var w = window,
			d = document,
			e = d.documentElement,
			g = d.getElementsByTagName('body')[0],
			x = w.innerWidth || e.clientWidth || g.clientWidth,
			y = w.innerHeight|| e.clientHeight|| g.clientHeight;
				
		//alert("Current Screen width: " + x + " height: " + y);		

		return(
			<div>

				<div style={divStyle} className="bg-wrapper center option animated zoomInUp">
				 <ComponentOne  visible={this.state.oneVisible} pages={this.state.pages } onClick={this.closeBtnClick}/>
			    </div>
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