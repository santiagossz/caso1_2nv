import React, { useEffect, useState, useRef } from "react";
import CircleType from "circletype";
// import { useHistory } from "react-router-dom";
import List from "./List";

const Pokeball = () => {
	const textoCircular = useRef(null);
	// const history = useHistory();

	const [background, setBackground] = useState("pokeball");
	const [open, setOpen] = useState("open");

	useEffect(() => {
		document.body.className = background;
		new CircleType(textoCircular.current).radius(270);
	});

	// function handleClick() {
	// 	history.push(List);
	// }
	return (
		<div>
			<h1 ref={textoCircular} className='title'>
				Lista de Pokémon
			</h1>
			<button
				className={open}
				style={{ opacity: 0 }}
				onMouseOver={() => {
					background == "pokeball"
						? setBackground("list")
						: window.location.reload(false);
					open == "open" ? setOpen("noOpen") : setOpen("open");
				}}
			>
				{""}
			</button>

			{/* <List /> */}
		</div>
	);
};

export default Pokeball;
