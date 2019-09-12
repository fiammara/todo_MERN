import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoItem = (props) => {
  const { name, _id, handleDelete } = props;
  return (
    <tr>
      <td>{name}</td>
      <td>
        <button type="button" onClick={() => handleDelete(_id)}>
          Archive
          <DeleteIcon color="action" />
        </button>
      </td>
    </tr>
  );
};

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default TodoItem;
