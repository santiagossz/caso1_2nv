import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Pokemon = ({ project }) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const [front, setFront] = useState("front");
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
				<button>Ver Habilidades</button>
				<p>Descripción Genérica</p>
				<h3>{project.title}</h3>
			</div>
			<div
				className={front}
				id={`one-${project.title}`}
				onClick={() => {
					setIsFlipped(!isFlipped);
					setFront("front");
				}}
			>
				<button>Ver Habilidades</button>
				<p>Descripción Genérica</p>
				<h3>{project.title}</h3>
			</div>
		</ReactCardFlip>
	);
};

export default Pokemon;
