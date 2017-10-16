var AppActions = require('../actions/AppActions');
var axios = require('axios');

module.exports = {

	 // Load mock product data from localStorage into ProductStore via Action
  getPageData: function () {
  	console.log("appAPI.getPageData...");
  	// Performing a GET request
/* axios.get('http://digitest-authorize.rhcloud.com/mega-data')
	  .then(function(response){
	    console.log("appAPI.getPageData: " ,response.data); // ex.: { user: 'Your User'}
	    console.log(response.status); // ex.: 200

	    var data = response.data;
    	AppActions.loadPages(data);
	  }); */
    //var data = JSON.parse(localStorage.getItem('page'));
    //AppActions.loadPages(data);
  }

}; //end exports