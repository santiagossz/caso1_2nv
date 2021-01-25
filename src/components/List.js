import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Abilities from "./Abilities";
import Flip from "./Flip";
import axios from "axios";
import Pokemon from "./pokemon.json";

const List = () => {
	const breakPoints = [
		{ width: 1, itemsToShow: 2 },
		{ width: 550, itemsToShow: 3 },
		{ width: 850, itemsToShow: 4 },
		{ width: 900, itemsToShow: 5 },
	];

	const [pokemon, setPokemon] = useState(" ");
	const [pokemonData, setPokemonData] = useState([]);

	const handleChange = (e) => {
		setPokemon(e);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		document.body.className = "abilities";
		getPokemon();
	};
	const getPokemon = async () => {
		const toArray = [];
		try {
			const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
			const res = await axios.get(url);
			toArray.push(res.data);
			setPokemonData(toArray);
		} catch (e) {
			console.log(e);
		}
	};

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
			<Abilities pokemonData={pokemonData} />

			<div className='carousel'>
				<Carousel breakPoints={breakPoints}>
					{Pokemon.map((item) => (
						<Flip
							project={item}
							handleSubmit={handleSubmit}
							handleChange={handleChange}
						/>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default List;
// style={{ display: "none" }}
