import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class TortillaCard extends Component {
  render() {
    const {data: {_id, name, special, size, imageUrl}, onDelete} = this.props;
    return (
        <li>
          <Link to={`/tortillas/${_id}`}>{name}</Link>
          <button onClick={() => onDelete(_id)}>Delete</button>
        </li>
    );
  }
}

export default TortillaCard;