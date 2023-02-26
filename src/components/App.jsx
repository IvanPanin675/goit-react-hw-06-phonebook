import FormAddContact from './FormAddContact/FormAddContact';
import FilterSearch from './FilterSearch/FilterSearch';
import ContactsList from './ContactsList/ContactsList';
import { useSelector } from 'react-redux';

export function App() {
  const contacts = useSelector(store => store.contacts);

  return (
    <>
      <h1>Phonebook</h1>
      <FormAddContact />
      {Boolean(contacts.length) && (
        <>
          <h2>Contacts</h2>
          <FilterSearch />
          <ContactsList />
        </>
      )}
    </>
  );
}
