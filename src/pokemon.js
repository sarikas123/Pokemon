import React, { useEffect, useState } from "react";

const Pokemon = (props) => {
  const [selectedPokemons, setPokemons] = useState(null);
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemons}`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data));

    console.log(selectedPokemons);
  }, [selectedPokemons]);

  return (
    <div>
      <h2>Pokemon</h2>
      <button onClick={() => setPokemons("bulbasaur")}>bulbasaur</button>
      <button onClick={() => setPokemons("charmander")}>charmander</button>
      <button onClick={() => setPokemons("charizard")}>charizard</button>
      <h3>{selectedPokemons}</h3>
      <h1>{props.timer}</h1>
      Pokemon name:{pokemonData?.name}
      <br />
      Pokemon weight:{pokemonData?.weight}
      <br />
      Pokemon height:{pokemonData?.height}
    </div>
  );
};

export default Pokemon;

export class PokemonClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPokemons: null,
      pokemonData: null
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    if (this.state.selectedPokemons !== prevState.selectedPokemons) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.selectedPokemons}`)
        .then((response) => response.json())
        .then((data) => this.setState({ ...this.state, pokemonData: data }));
    }
  }

  render() {
    return (
      <div>
        <h2>Pokemon</h2>
        <button
          onClick={() =>
            this.setState({ ...this.state, selectedPokemons: "bulbasaur" })
          }
        >
          bulbasaur
        </button>
        <button
          onClick={() =>
            this.setState({ ...this.state, selectedPokemons: "charmander" })
          }
        >
          charmander
        </button>
        <button
          onClick={() =>
            this.setState({ ...this.state, selectedPokemons: "charizard" })
          }
        >
          charizard
        </button>
        <h3>{this.state.selectedPokemons}</h3>
        <h1>{this.props.timer}</h1>
        Pokemon name:{this.state.pokemonData?.name}
        <br />
        Pokemon weight:{this.state.pokemonData?.weight}
        <br />
        Pokemon height:{this.state.pokemonData?.height}
      </div>
    );
  }
}
