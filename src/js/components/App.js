var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
//cooper s - add subcomponents here

var Articles = require('./Articles.js');
var Tags = require('./Tags.js');
var Top25 = require('./Top25.js')

function getAppState(){
//	console.log("App.getAppState: ", AppStore.getOneVisible());
	return {
		//app: AppStore.getState(),
		pages: AppStore.getPages(),
		articlesVisible: AppStore.getArticlesVisible(),
		tagsVisible: AppStore.getTagsVisible(),
		top25Visible: AppStore.getTop25Visible()
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
	  console.log('APP - Handle Articles button click: ');
	  $('#btn1').removeClass("btn-hilite");
	  $('#btn1').addClass("btn");

	  $('#btn2').removeClass("btn");
	  $('#btn2').addClass("btn-hilite");

	  $('#btn3').removeClass("btn-hilite");
	  $('#btn3').addClass("btn"); 


      AppActions.myEvent('Articles click');
    },
    handleBtnClick2: function() {
	  console.log('APP - Handle my button click: ');

	  $('#btn3').removeClass("btn");
	  $('#btn3').addClass("btn-hilite");

	  $('#btn2').removeClass("btn-hilite");
	  $('#btn2').addClass("btn");

	  $('#btn1').removeClass("btn-hilite");
	  $('#btn1').addClass("btn"); 

      AppActions.showTags('Button Tags click');
	},
	handleTop25Click: function(){
		console.log("show Top25 Panel");

		$('#btn1').removeClass("btn");
		$('#btn1').addClass("btn-hilite");
  
		$('#btn2').removeClass("btn-hilite");
		$('#btn2').addClass("btn");
  
		$('#btn3').removeClass("btn-hilite");
		$('#btn3').addClass("btn"); 

		AppActions.showTop25('Top25 click');
	},
	render: function(){
		return(
			<div>
				<p>mPoint AutoContant Manager</p>
				<div className="sidePanel">
					<button onClick={this.handleTop25Click} className="btn-hilite" id="btn1">Top 25 Articles</button>
					<button onClick={this.handleBtnClick} className="btn" id="btn2">Create Articles</button>
					<button onClick={this.handleBtnClick2} className="btn" id="btn3">Add Tags</button>
				 </div>
					<Articles  visible={this.state.articlesVisible} pages={this.state.pages }/>
					<Tags  visible={this.state.tagsVisible} pages={this.state.pages }/>
					<Top25  visible={this.state.top25Visible} pages={this.state.pages }/>
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