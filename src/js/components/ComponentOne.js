var React = require('react');

var ComponentOne = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("componentOne is off");
          return false;
        }

		return (
			<div>
				
				<div className='pageOne center option animated zoomInUp'>page one
					<h1 className="name">{this.props.pages.name }</h1>
					<img src={this.props.pages.avatar } />
				</div>
			</div>
			);
	}//end render
});//end ComponentOne

module.exports = ComponentOne;