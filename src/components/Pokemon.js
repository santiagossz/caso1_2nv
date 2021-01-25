import React, { useState } from "react";
import Flip from "./Flip";
import axios from "axios";

const Pokemon = ({ project }) => {
	const [pokemon, setPokemon] = useState("pikachu");
	const [pokemonData, setPokemonData] = useState([]);
	const [pokemonType, setPokemonType] = useState("");

	const handleChange = () => {
		setPokemon(project.title.toLowerCase());
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		getPokemon();
	};
	const getPokemon = async () => {
		const toArray = [];
		try {
			const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
			const res = await axios.get(url);
			toArray.push(res.data);
			setPokemonType(res.data.types[0].type.name);
			setPokemonData(toArray);
		} catch (e) {
			console.log(e);
		}
	};
	console.log(pokemonData);

	return (
		<div>
			<Flip project={project} />
		</div>
	);
};

export default Pokemon;
