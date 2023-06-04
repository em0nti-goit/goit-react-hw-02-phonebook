import React, { Component } from 'react';
import FormAddContact from './FormAddContact';
import { Container } from 'react-bootstrap';
import Section from './Section';
import Contacts from './Contacts';
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [],
  };

  addContact = name => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name, id: nanoid() }],
    }));
  };

  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <FormAddContact onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Contacts contacts={this.state.contacts} />
        </Section>
      </Container>
    );
  }
}
