import React from "react";

const Abilities = (props) => {
	console.log(props.pokemonData);

	return props.pokemonData.map((data) => {
		return (
			<div className='abilities_card'>
				<img src={data.sprites["front_default"]} />
				<h3 className='name_abilities'>{data.name}</h3>
				<table>
					<thead>
						<tr>
							<th>Habilidad</th>
							<th>Url</th>
							<th>Posiciȯn</th>
							<th>Tipo</th>
						</tr>
					</thead>

					{data.abilities.map((ability, index) => {
						return (
							<tbody>
								<tr>
									<td>{ability.ability.name}</td>
									<td>{ability.ability.url}</td>
									<td>{ability.slot}</td>
									<td>{ability.is_hidden == true ? "Oculta" : "Visible"}</td>
									{/* className={`p-${index}`} */}
								</tr>
							</tbody>
						);
					})}
				</table>
			</div>
		);
	});
};

export default Abilities;
