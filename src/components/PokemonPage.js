import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
const URL = 'http://localhost:4000/pokemon'

class PokemonPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      tempPokemons: []
      
    }
  }
  componentDidMount() {
    fetch(URL).then(resp => resp.json())
    .then(data => {
      this.setState({
        pokemons: data,
        tempPokemons: data
      },() => {console.log('state ; ',this.state)})
    }).catch((e) => {console.log(e)});

  }

  submitData = (formData) => {
    const confObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    }
    fetch(URL, confObj).then(resp => resp.json())
    .then(data => {
      const newPokemons = [...this.state.pokemons];
      newPokemons.push(data);
      this.setState({
        pokemons: newPokemons,
        tempPokemons: newPokemons
      })
    }).catch(e => {console.log(e)})
  }

  doSearch = (keyword) => {
    const result = this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(keyword.toLowerCase()));
    this.setState({
      tempPokemons: result
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submitData={this.submitData} />
        <br />
        <Search search={this.doSearch} />
        <br />
        <PokemonCollection pokemons={this.state.tempPokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
