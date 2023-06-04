import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

const Contact = ({ contact: {name, number} }) => {
  return (
    <ListGroup.Item>
      <div className="ms-2 me-auto">
        <div className="fw-bold">{name}</div>
        {number}
      </div>
    </ListGroup.Item>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default Contact;
