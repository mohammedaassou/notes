import React from 'react';
import './model.css';

const Model = ({ show, handleClose }) => {
	return (
		show && (
			<div className="instructions-overlay">
				<div className="instructions-content">
					<h2 className='p-4'>Cheeck the title if is empty</h2>
					
					<button className="close-button text-sm sm:text-xl" onClick={handleClose}>
						Close
					</button>
				</div>
			</div>
		)
	);
};
export default Model;
