var React = require('react');

var ComponentOne = React.createClass({
	
	closeMe: function () {
		console.log("Close one up!");
		this.props.onClick();
	},
	blogPage: function () {
		console.log("lets head to the blog...");
		window.open('http://hudlinentertainment.com/');
	},
	render: function() {
		 if (!this.props.visible) {
		 	console.log("componentOne is off");
          return false;
        }

		return (
			<div>
				<div className='pageOne center option animated zoomInUp'>
					<div className='closeBtn' onClick={this.closeMe}>X</div>
					Reggie's Latest
					<p></p>
					<center><img src="img/don-rickles-320x240.jpg" className='blogImage showPointer' onClick=
					{this.blogPage}></img></center>
				
				</div>
			</div>
			);
	}//end render
});//end ComponentOne

module.exports = ComponentOne;