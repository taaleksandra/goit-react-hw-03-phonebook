import React, { Component } from 'react';
import clsx from 'clsx';

import css from '../components/App.module.css';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  addContact = value => {
    const test = this.state.contacts.find(
      contact => contact.name === value.name
    );

    if (test) {
      alert(`${value.name} id already in contacts`);
      return;
    }
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, value],
      };
    });
  };

  findContact = value => {
    this.setState({ filter: value });
  };

  deleteContact = value => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== value),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className={clsx(css.phonebook)}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h1>Contacts</h1>
        <Filter onChange={this.findContact} />
        <ContactList
          contacts={contacts}
          filter={filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
