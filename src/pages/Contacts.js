import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Oval } from 'react-loader-spinner';

import ContactList from '../components/ContactList/ContactList';
import AddContact from '../components/AddContact/AddContact';
import Filter from '../components/Filter/Filter';

import { fetchContacts } from '../redux/contacts/operations';
import { selectErrorValue, selectIsLoading } from '../redux/contacts/selectors';

import css from '../components/App/App.module.css';
import 'react-toastify/dist/ReactToastify.css';

const Contacts = () => {
  const error = useSelector(selectErrorValue);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <AddContact />
      <p className={css.sectionHeading}>Contacts</p>
      <Filter />
      <ContactList />
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
export default Contacts;
