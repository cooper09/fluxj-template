var React = require('react');

var Articles = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("Articles is off");
          return false;
        }

		return (
			<div>
				
				<div className='mainScrn center option animated fadeIn'>Select Articles
					<h1 className="name">{this.props.pages.name }</h1>
					<img src={this.props.pages.avatar } />
				</div>
			</div>
			);
	}//end render
});//end Articles

module.exports = Articles;