var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

//cooper s - a state called _items
var _pages = [];

var _oneVisible = false, _twoVisible = false;

var _image = "img/image1.jpg";


// Method to load product data from mock API
function loadPageData(data) {
  _pages = data[0];
  console.log("AppStore.loadPageData: ", _pages );

}

	// Set cart visibility
function setOneVisible(visible) {
  _oneVisible = true;
  _twoVisible = false;
}

function setTwoVisible(visible) {
  _twoVisible = true;
  _oneVisible = false;
}

function closeWindow() {
	console.log("AppStore.closeWindow - close whatever window open: " );
	_oneVisible = false;
  _twoVisible = false;
}

 function setBgImg() {
	console.log("AppStore - setBgImg: here's we calculate what our background image will be... " );

  const bgList = [
		"img/image1.jpg",
		"img/image2.jpg"
	];

	console.log("AppStore.setBgImg = BgList: " + bgList );

	// our random number generator  TODO: automate from input data, ie, count the number of
	//  in the background list array and use that to seed our random number generator

	var idx = Math.floor(Math.random() * 2 + 1) - 1;

  console.log("Our random number generator has generated: " + idx );

	console.log('Curent image: ' + bgList[idx])
  _image = bgList[idx];
}


var AppStore = assign({}, EventEmitter.prototype, {


	getBgImg: function () {
		//This is the function to return the current state of the background image. 
		console.log("AppStore.getBgImage - current state: " +  _image );
		return _image;
	}, 

	getPages: function () {
	    return _pages;
	  },
	getState: function () {
	 	return "Get State...";
	},
	  // Return cart visibility state
	getOneVisible: function () {
		console.log('AppStore.getOneVisible: ' + _oneVisible );
		// for our simple form we will keep Component One (the form) be visible from the beginning
		_oneVisible = true;
		return _oneVisible;
	},
	getTwoVisible: function () {
		console.log('AppStore.getTwoVisible: ' + _twoVisible );
		return _twoVisible;
	},
	  // Set cart visibility
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on('change', callback);
	},
	removeChangeListener: function(callback){
		this.removeListener('change', callback);
	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;

	console.log("AppDispatcher: ", action.actionType );
	switch(action.actionType){

		// Respond to RECEIVE_DATA action
	    case 'RECEIVE_DATA':
			console.log("AppStore - Receiving Data: ", action.data );	    
	      	loadPageData(action.data);
	      break;

		case 'MY_EVENT':
	  	  console.log("OK we have my own personal event. About now I should be changing some state: ", payload );
	      _visible=true;
	      setOneVisible(_visible);
	 	break;
	 	case 'TWO_VISIBLE':
	  	  console.log("Show page two: ", payload );
	      _visible=true;
	      setTwoVisible(_visible);
	 	break;
		case 'CLOSE_WINDOW':
	  	  console.log("CLOSE_WINDOW action - Close Our Window... ", payload.data );
				closeWindow();
	 	break;
		 case 'ON_LOAD':
	  	  console.log("ON_LOAD action - Loading up our image... ", payload.data );
				setBgImg(payload.data);
	 	break;
	}//end switch

	AppStore.emitChange();
	return true;
});

module.exports = AppStore;