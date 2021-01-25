import React from "react";

const Abilities = (props) => {
	console.log(props.pokemonData);

	return props.pokemonData.map((data) => {
		return (
			<div>
				<img src={data.sprites["front_default"]} />
				{data.abilities.map((ability, index) => {
					return (
						<div>
							<p>{ability.ability.name}</p>
							<p>{ability.ability.url}</p>
							<p>{ability.slot}</p>
							<p>{ability.is_hidden == true ? "Oculta" : "Visible"}</p>
						</div>
					);
				})}
			</div>
		);
	});
};

export default Abilities;
