var React = require('react');

var ComponentOne = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("componentOne is off");
          return false;
        }

		return (
			<div>
				
				<div className='pageOne center option animated zoomInUp'>Hudlin's activity for the Month'
					<h1 className="name">{this.props.pages.name }</h1>
				
				</div>
			</div>
			);
	}//end render
});//end ComponentOne

module.exports = ComponentOne;