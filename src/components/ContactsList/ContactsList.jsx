import { useSelector } from 'react-redux';
import ItemContactsList from './ItemContactsList/ItemContactsList';
import styles from './ContactList.module.css';

const ContactsList = () => {
  const contacts = useSelector(store => store.contacts);
  const filter = useSelector(store => store.filter);

  const getVisibleContacts = () => {
    if (contacts) {
      const lowerFilter = filter.toLowerCase();

      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(lowerFilter)
      );
    }
  };

  return (
    <ul className={styles.ul}>
      {getVisibleContacts().map(({ id, name, number }) => {
        return (
          <ItemContactsList
            key={id}
            name={name}
            number={number}
            deleteId={id}
          />
        );
      })}
    </ul>
  );
};

export default ContactsList;
