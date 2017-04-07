var React = require('react');

var BgHandler = React.createClass({

	render: function() {
		 if (!this.props.bgImage) {
		 	console.log("We don't have a background image...");
        } 

		return (
			<div>
				
				<div className=''>The Background Handler
					<h1 className="">{this.props.bgImage }</h1>
				
				</div>
			</div>
			);
	}//end render
});//end BgHandler

module.exports = BgHandler;