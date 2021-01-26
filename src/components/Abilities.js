import React from "react";

const Abilities = (props) => {
	console.log(props.pokemonData);

	return props.pokemonData.map((data) => {
		return (
			<div className='abilities_card'>
				<img src={data.sprites["front_default"]} />
				<h3 className='name_abilities'>{data.name}</h3>
				<table>
					<tr>
						<th>Habilidad</th>
						<th>Url</th>
						<th>Posiciȯn</th>
						<th>Tipo</th>
					</tr>
					{data.abilities.map((ability, index) => {
						return (
							<tr>
								<th>{ability.ability.name}</th>
								<th>{ability.ability.url}</th>
								<th>{ability.slot}</th>

								{/* <p className={`p-${index}`}>
									{ability.is_hidden == true ? "Oculta" : "Visible"}
								</p> */}
							</tr>
						);
					})}
				</table>
			</div>
		);
	});
};

export default Abilities;
