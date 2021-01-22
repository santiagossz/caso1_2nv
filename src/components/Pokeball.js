import React, { useEffect, useRef } from "react";
import CircleType from "circletype";
import { useHistory } from "react-router-dom";
import List from "./List";

const Pokeball = () => {
	const textoCircular = useRef(null);
	const history = useHistory();

	useEffect(() => {
		document.body.className = "pokeball";
		new CircleType(textoCircular.current).radius(270);
	});
	function handleClick() {
		history.push(List);
	}
	return (
		<div>
			<h1 ref={textoCircular} className='title'>
				Lista de Pokémon
			</h1>
			{/* <button type='button' onClick={handleClick}>
				Go home
			</button> */}
		</div>
	);
};

export default Pokeball;
