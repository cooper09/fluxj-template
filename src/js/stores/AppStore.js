var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

//cooper s - a state called _items
var _pages = [];

var _articlesVisible = false, _tagsVisible = false, _top25Visible = true;


// Method to load product data from mock API
function loadPageData(data) {
  _pages = data[0];
  console.log("AppStore.loadPageData: ", _pages );

}

	// Set cart visibility
function setOneVisible(visible) {
  _articlesVisible = true;
	_tagsVisible = false;
	_top25Visible = false;
}

function setTagsVisible(visible) {
  _tagsVisible = true;
	_articlesVisible = false;
	_top25Visible = false;
}

function setTop25Visible(visible) {
  _top25Visible = true;
	_articlesVisible = false;
	_tagsVisible = false;
}

var AppStore = assign({}, EventEmitter.prototype, {
	getPages: function () {
	    return _pages;
	  },
	getState: function () {
	 	return "Get State...";
	},
	  // Return cart visibility state
	getArticlesVisible: function () {
		console.log('AppStore.getArticlesVisible: ' + _articlesVisible );
		return _articlesVisible;
	},
	getTagsVisible: function () {
		console.log('AppStore.getTagsVisible: ' + _tagsVisible );
		return _tagsVisible;
	},
	getTop25Visible: function () {
		console.log('AppStore.getTop25Visible: ' + _top25Visible );
		return _top25Visible;
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
		 case 'SHOW_TAGS':
		 console.log("Show page two: ", payload );
		 _visible=true;
		 setTagsVisible(_visible);
	break;
	case 'REMOVE_TAGS':
	console.log("Show page two: ", payload );
	_visible=false;
	setTagsVisible(_visible);
break;
	 	case 'SHOW_TOP25':
	  	  console.log("Show page two: ", payload );
	      _visible=true;
	      setTop25Visible(_visible);
		 break;
		 case 'REMOVE_TOP25':
		 console.log("Show page two: ", payload );
		 _visible=false;
		 setTop25Visible(_visible);
	break;


	}//end switch

	AppStore.emitChange();
	return true;
});

module.exports = AppStore;