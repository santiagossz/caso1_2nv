import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Flip = ({ project }) => {
	const [front, setFront] = useState("front");
	const [isFlipped, setIsFlipped] = useState(false);
	return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
			<div
				className={front}
				id={project.title}
				onClick={() => {
					setIsFlipped(!isFlipped);
					setFront("back");
				}}
			>
				<h3 className='name'>{project.title}</h3>
			</div>
			<div
				className={front}
				id={`one-${project.title}`}
				onClick={() => {
					setIsFlipped(!isFlipped);
					setFront("front");
				}}
			>
				<p className='dscrp'>Descripción Genérica de {project.title}</p>
				<button
					className='boton'
					onClick={(e) => {
						e.stopPropagation();
						document.body.className = "abilities";
						setIsFlipped(!isFlipped);
						document.h3 = "afda";
					}}
				>
					Ver Habilidades
				</button>
			</div>
		</ReactCardFlip>
	);
};

export default Flip;
