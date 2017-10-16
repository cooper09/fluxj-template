var React = require('react');

var Top25 = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("Top25 is off");
          return false;
        }

		return (
			<div>
				<div className='mainScrn center option animated fadeIn'>Top 25
					<h3>{this.props.pages.id }</h3>
				</div>
			</div>
			);
	}//end render
});//end Tags

module.exports = Top25;