import React from "react";
import Rodal from "rodal";

const Abilities = () => {
	<Rodal visible={visible} onClose={this.hide} animation={animation} closeOnEsc>
		<div className='header'>Rodal</div>
		<div className='body'>A React modal with animations.</div>
		<button className='rodal-confirm-btn' onClick={this.hide}>
			ok
		</button>
		<button className='rodal-cancel-btn' onClick={this.hide}>
			close
		</button>
	</Rodal>;
};

export default Abilities;
