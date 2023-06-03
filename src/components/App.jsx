import React, { Component } from 'react';
import FormAddContact from './FormAddContact';
import { Container } from 'react-bootstrap';
import Section from './Section';
import Contacts from './Contacts';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <Container>
        <Section title="Phonebook">
        <FormAddContact />
        </Section>
        <Section title="Contacts">
          <Contacts />
        </Section>
      </Container>
    );
  }
}
