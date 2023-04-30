import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import {PageContactSection} from './PageContacts.styled';

function PageContacts() {
  return (
    <PageContactSection>
      <ContactForm />
      <Filter />
      <ContactList />
    </PageContactSection>
  );
}

export default PageContacts;