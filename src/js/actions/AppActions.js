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
	}

}//end AppActions
module.exports = AppActions;