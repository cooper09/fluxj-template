var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
// Receive inital product data
myEvent: function (data) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.MY_EVENT,
      data: data
    	})
	},

showTwo: function (data) {
	console.log("AppActions.showTwo: ", data );
    AppDispatcher.handleViewAction({
      actionType: AppConstants.TWO_VISIBLE,
      data: data
    	})
	},
loadPages: function (data) {
	console.log("AppActions.loadPages: ", data );
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_DATA,
      data: data
    	})
	},
closeMe: function (data) {
	console.log("AppActions.closeMe: ", data );
    AppDispatcher.handleViewAction({
      actionType: AppConstants.CLOSE_WINDOW,
      data: data
    	})
	},
onLoad: function (data) {
	console.log("AppActions.onLoad: ", data );
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ON_LOAD,
      data: data
    	})
	}

}//end AppActions
module.exports = AppActions;