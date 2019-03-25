import React, { Component } from 'react';

class CreateForm extends Component {

  state = {
    name: this.props.initialValue.name || '',
    special: this.props.initialValue.special || '',
    size: this.props.initialValue.size || '',
    imageUrl: this.props.initialValue.imageUrl || '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    if (!this.props.initialValue) {
      this.setState({
        name: '',
        special: '',
        size: '',
        imageUrl: '',
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.name} onChange={this.handleChange} name="name" type="text"/>
        <input value={this.state.special} onChange={this.handleChange} name="special" type="text"/>
        <input value={this.state.size} onChange={this.handleChange} name="size" type="text"/>
        <input value={this.state.imageUrl} onChange={this.handleChange} name="imageUrl" type="text"/>
        <button type="submit">Create</button>
      </form>
    );
  }
}

export default CreateForm;