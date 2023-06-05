import React from 'react'
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import Contact from './Contact';

const Contacts = ({ contacts, onDelete }) => {
  return (
        <ListGroup variant="flush">
          {contacts.map(contact => (
            <Contact key={contact.id} contact={contact} onDelete={onDelete} />
          ))}
        </ListGroup>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default Contacts