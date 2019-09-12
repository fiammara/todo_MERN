import React from 'react';
import PropTypes from 'prop-types';

const ArchiveItem = (props) => {
  const { name } = props;
  return (
    <tr>
      <td>{name}</td>
    </tr>
  );
};

ArchiveItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default ArchiveItem;
