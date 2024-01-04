import React from 'react';
import { useSelector } from 'react-redux';

import Contact from '../Contact/Contact';
import { selectVisibleContacts } from '../../redux/contacts/selectors';

import { ContactsList } from '../ContactList/ContactsList.styled';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ContactsList>
      {visibleContacts.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ContactsList>
  );
};
export default ContactList;
