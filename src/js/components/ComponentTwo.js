var React = require('react');

var ComponentTwo = React.createClass({

	closeMe: function() {
		console.log("Close me up!");
		this.props.onClick();
	},
 	salesPage: function() {
		console.log("Show our sale page...");
		//AppActions.myEvent('Sale Button click');
		window.open('http://www.reggiesworld.com/pages/shop/hardware-man-in-the-machine-124.php');
	},
 
 
	render: function() {
		 if (!this.props.visible) {
		 	console.log("componentTwo is off");
          return false;
        }

		return (
			<div>
				<div className='pageTwo center option animated zoomInLeft'>
				<div className='closeBtn' onClick={this.closeMe}>X</div>
					Reggie's bargain of the month
					<center><h3 onClick={this.salesPage} className='showPointer'>Buy Now</h3></center>
					<center><img src="img/HardwareManMachine.jpg" onClick={this.salesPage} className='showPointer'></img></center> 
				</div>
			</div>
			);
	}//end render
});//end ComponentOne

module.exports = ComponentTwo;