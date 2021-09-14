import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    }
  }

  handleClick = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    const { id, name, hp, sprites } = this.props.pokemon;
    return (
      <Card>
        <div>
          <div className="image" onClick={this.handleClick}>
            <img src= {this.state.toggle === true ? sprites.front : sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
