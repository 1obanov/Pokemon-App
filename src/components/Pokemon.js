import React, { useContext } from "react";

const Pokemon = (props) => {
  const { pokemon } = props;

	return (
		<li className="pokemon-item" key={pokemon.name} >
			<div className="pokemon-card">
				<div className="pokemon-card-holder">
					<div className="pokemon-card-main">
							<div className="pokemon-card-img">
								<img
									src={pokemon.sprites.other.dream_world.front_default}
									alt={pokemon.name}
									className="pokemon-img"
									/>
								</div>
							<h3 className="pokemon-card-name">{pokemon.name}</h3>
							<span className="pokemon-card-id">#{pokemon.id}</span>
							<ul className="pokemon-card-type">
								{pokemon.types.map((type, idx) => {
								return (
									<li key={idx}>
									{type.type.name}
									</li>
								);
								})}
							</ul>
						</div>
						<div className="pokemon-card-details">
							<span className="pokemon-card-id">#{pokemon.id}</span>
								<ul className="pokemon-card-info">
									<li>
										Height: {pokemon.height}
									</li>
									<li>
										Weight: {pokemon.weight}
									</li>
								</ul>
						</div>
				</div>
			</div>
		</li>
	);
};

export default Pokemon;