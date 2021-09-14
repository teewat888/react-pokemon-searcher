import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      hp: 0,
        front: '',
        back: ''
      
    }
  }
  handleOnChange = (e) => {
    if(e.target.name === 'hp') {
      if(typeof(e.target.value) !== 'number') {
        console.log('please enter number');

        return true
      }
    }
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    let formData = { 
      name: this.state.name,
      hp: this.state.hp,
      sprites: {
        front: this.state.front,
        back: this.state.back
      }
    }
    console.log('formdata  ',formData);
    this.props.submitData(formData);
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleOnChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleOnChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="front" onChange={this.handleOnChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="back" onChange={this.handleOnChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
