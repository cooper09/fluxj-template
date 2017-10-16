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

showTags: function (data) {
	console.log("AppActions.showTwo: ", data );
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SHOW_TAGS,
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
  showTop25: function (data) {
    console.log("AppActions.loadPages: ", data );
      AppDispatcher.handleViewAction({
        actionType: AppConstants.SHOW_TOP25,
        data: data
        })
    },
    removeTop25: function (data) {
      console.log("AppActions.loadPages: ", data );
        AppDispatcher.handleViewAction({
          actionType: AppConstants.REMOVE_TOP25,
          data: data
          })
      }

}//end AppActions
module.exports = AppActions;