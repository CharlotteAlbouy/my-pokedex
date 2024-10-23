function PokemonCard() {
	const pokemon = {
		name: "Bulbasaur",
		image:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	};

	return (
		<figure>
			<img src={pokemon.image} alt={pokemon.name} />
			<figcaption>
				<h1>{pokemon.name}</h1>
			</figcaption>
		</figure>
	);
}

export default PokemonCard;
