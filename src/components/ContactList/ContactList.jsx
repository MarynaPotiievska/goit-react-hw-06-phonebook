import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import {
  Contact,
  ContactName,
  ContactNumber,
  DeleteButton,
  List,
} from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const hendleDelete = e => {
    const deletedElId = e.target.parentElement.getAttribute('id');
    dispatch(deleteContact(deletedElId));
  };

  const filteredContacts = () => {
    if (filter !== '') {
      const filteredArr = contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter)
      );
      return filteredArr;
    } else {
      return contacts;
    }
  };

  return (
    <List>
      {filteredContacts().map(contact => {
        const { id, name, phone } = contact;
        return (
          <Contact key={id} id={id}>
            <ContactName>{name}</ContactName>
            <ContactNumber>{phone}</ContactNumber>
            <DeleteButton type="button" onClick={hendleDelete}>
              Delete
            </DeleteButton>
          </Contact>
        );
      })}
    </List>
  );
};

export default ContactList;
