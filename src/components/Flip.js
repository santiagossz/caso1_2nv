import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Flip = (props) => {
	const [front, setFront] = useState("front");
	const [isFlipped, setIsFlipped] = useState(false);
	return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
			<div
				className={front}
				id={props.project.title}
				onClick={() => {
					setIsFlipped(!isFlipped);
					setFront("back");
				}}
			>
				<h3 className='name'>{props.project.title}</h3>
			</div>
			<div
				className={front}
				id={`one-${props.project.title}`}
				onClick={() => {
					setIsFlipped(!isFlipped);
					setFront("front");
				}}
			>
				<p className='dscrp'>Descripción Genérica de {props.project.title}</p>
				<form action='' onSubmit={props.handleSubmit}>
					<button
						className='boton'
						onClick={(e) => {
							e.stopPropagation();
							setIsFlipped(!isFlipped);
							props.handleChange(props.project.title.toLowerCase());
						}}
					>
						Ver Habilidades
					</button>
				</form>
			</div>
		</ReactCardFlip>
	);
};

export default Flip;
