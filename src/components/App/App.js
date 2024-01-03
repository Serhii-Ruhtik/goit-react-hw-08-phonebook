import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Oval } from 'react-loader-spinner';
import { useGetContactsQuery } from '../../redux/contactsApi';
import ContactList from '../ContactList/ContactList';
import AddContact from '../AddContact/AddContact';
import Filter from '../Filter/Filter';

import { selectFilterValue } from '../../redux/selectors';

import css from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const filterValue = useSelector(selectFilterValue);
  const { data, isLoading, error } = useGetContactsQuery();
  const visibleContacts = data
    ? data.filter(item => {
        return item.name.toLowerCase().includes(filterValue);
      })
    : [];

  return (
    <div className={css.container}>
      <p className={css.sectionHeading}>Phonebook</p>
      <AddContact visibleContacts={visibleContacts} />
      <p className={css.sectionHeading}>Contacts</p>
      <Filter />
      {!isLoading && <ContactList visibleContacts={visibleContacts} />}
      {isLoading && !error && (
        <Oval
          ariaLabel="loading-indicator"
          height={100}
          width={100}
          strokeWidth={5}
          strokeWidthSecondary={1}
          color="blue"
          secondaryColor="white"
          wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
        />
      )}
      <ToastContainer />
    </div>
  );
};
export default App;
