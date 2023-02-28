import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import { AppTitle, Title, DefaultMessage } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <div>
      <AppTitle>Phonebook</AppTitle>
      <ContactForm />

      <Title>Contacts</Title>
      <Filter />
      {contacts.length === 0 ? (
        <DefaultMessage>
          There is no any contact yet. Please, add a contact.
        </DefaultMessage>
      ) : (
        <ContactList />
      )}
    </div>
  );
};
