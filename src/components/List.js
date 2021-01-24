import React from "react";
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
	return (
		<div className='list_div'>
			<h3 className='pokemon'>Aquí podrás ver tus Pokémon</h3>
			<div className='carousel'>
				<Carousel itemsToShow={5}>
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
