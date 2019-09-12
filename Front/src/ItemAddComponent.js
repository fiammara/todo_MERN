import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// import axios from 'axios';
import api from './api';

class ItemAddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {     
          name: ''       
    };
  }

  handleChangeFor = (property) => (event) => {
    this.setState({ [property]: event.target.value });
};

  addItem = () => {
    const { name } = this.state;
   
    const payload = { name };
   // alert (payload.name);
    // eslint-disable-next-line import/no-named-as-default-member
    api.insertTodo({ payload });
}

  render() {
    const { onCancel } = this.props;
    return (
      <div>
        <p>Name your todo</p>

        <div>
          <form>
            <div className="form-group">
              <input
                type="text"
                autoComplete="off"
                value={this.name}
                onChange={this.handleChangeFor('name')}
              />
            </div>
            
            <button
              className="inputButton"
              type="button"
              onClick={onCancel}
            >
                Cancel
            </button>
            <button 
              className="inputButton"
              type="button"
              onClick={this.addItem}
            >
              <NavLink to={{ pathname: '/todos' }} />
                OK
            </button>
            
          </form>
        </div>
      </div>
    );
  }
}

ItemAddComponent.propTypes = {
  onCancel: PropTypes.func.isRequired
};

export default ItemAddComponent;
