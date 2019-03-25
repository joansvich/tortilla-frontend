import React, { Fragment, Component } from 'react';
import tortillaService from '../services/tortillaService';
import CreateForm from '../components/CreateForm';

class DetailTortilla extends Component {

  state = {
    tortilla: {},
    loading: true,
    showEdit: false
  }

  componentDidMount() {
    tortillaService.getTortilla(this.props.match.params.id)
      .then((tortilla) => {
        this.setState({
          tortilla,
          loading: false
        })
        console.log(this.state.tortilla);
      })
  }

  handleClick() {
    this.setState({
      showEdit: !this.state.showEdit
    })
  }

  handleSubmit = (tortilla) =>{
    const id = this.props.match.params.id;
    console.log(id);
    
    tortillaService.updateTortilla(id, tortilla)
      .then((result) => {
        console.log(result);
        this.setState({
          tortilla: {...tortilla}
        })
        // this.props.history.push('/tortillas');
      })
      .catch(err => console.log(err));
  }

  handleChange = (e) => {
    this.setState({
      tortilla: {
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    const { name, size, imageUrl, special } = this.state.tortilla;
    return (
      <div>
        {this.state.showEdit && <CreateForm 
            initialValue={{
              name,
              size,
              imageUrl,
              special,
            }} 
            onSubmit={this.handleSubmit}/>
        }
        {!this.state.showEdit &&
          <Fragment>
            <h1>{name}</h1>
            <p>{special}</p>
            <p>{size}</p>
          </Fragment>
        }
        <button onClick={() => this.handleClick()}>Edit</button>
      </div>
    );
  }
}

export default DetailTortilla;