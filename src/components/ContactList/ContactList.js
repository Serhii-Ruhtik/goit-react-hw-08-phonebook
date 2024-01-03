import React from 'react';
import Contact from '../Contact/Contact';
import { ContactsList } from './ContactsList.styled';

const ContactList = ({ visibleContacts }) => {
  return (
    <ContactsList>
      {visibleContacts.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ContactsList>
  );
};
export default ContactList;
