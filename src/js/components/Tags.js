var React = require('react');

var Tags = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("Tags is off");
          return false;
        }

		return (
			<div>
				<div className='mainScrn center option animated fadeIn'>Add Tags
					<h3>{this.props.pages.id }</h3>
				</div>
			</div>
			);
	}//end render
});//end Tags

module.exports = Tags;