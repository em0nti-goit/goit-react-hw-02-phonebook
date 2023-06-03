// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

export class FormAddContact extends Component {
  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formAddContactName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            placeholder='Enter contact name'
          />
          <Form.Text className="text-muted">
            Name may contain only letters, apostrophe, dash and spaces. For
            example Adrian, Jacob Mercer, Charles de Batz de Castelmore
            d'Artagnan
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add contact
        </Button>
      </Form>
    );
  }
}

export default FormAddContact;
