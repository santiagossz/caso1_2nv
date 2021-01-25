import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Pokemon from "./Pokemon";

const List = () => {
	const pokemon = {
		items: [
			{ title: "Arbok" },
			{ title: "Ekans" },
			{ title: "Fearow" },
			{ title: "Nidorina" },
			{ title: "Pikachu" },
			{ title: "Raichu" },
			{ title: "Sandshrew" },
			{ title: "Sandslash" },
			{ title: "Spearow" },
		],
	};
	const breakPoints = [
		{ width: 1, itemsToShow: 2 },
		{ width: 550, itemsToShow: 3 },
		{ width: 850, itemsToShow: 4 },
		{ width: 900, itemsToShow: 5 },
	];

	return (
		<div className='list_div'>
			<h3 className='pokemon'>Aquí podrás ver tus Pokémon</h3>
			<a
				className='boton-cerrar'
				onClick={() => (document.body.className = "list")}
			>
				<i class='fas fa-times'></i>
			</a>
			<h3 className='pokemon_abilities'>Habilidades</h3>

			<div className='carousel'>
				<Carousel breakPoints={breakPoints}>
					{pokemon.items.map((item) => (
						<Pokemon project={item} />
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default List;
// style={{ display: "none" }}
