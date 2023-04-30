import { useState } from 'react';
import { Label, Input, Button, Title, Sector } from './ContactForm.styled';
import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid'
import { useFetchContactsQuery, useCreateContactMutation } from 'redux/contacts/contactsApi';
import Loader from 'components/Loader';

function ContactForm  () { 
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts, isLoading } = useFetchContactsQuery();
  const [createContact] = useCreateContactMutation();


  const handleChange = e => {
    const { name, value } = e.currentTarget;
    
    switch (name) {
      case 'name': setName(value);
        break;
      case 'number': setNumber(value);
        break;
      default: return;
    }
  };

  const addContact = data => {
    const contactName = contacts.map(contact => contact.name.toLowerCase());
    const isAdding = contactName.includes(data.name.toLowerCase());

    if (!isAdding) {
      createContact(data);
      reset();
      toast.success(`Contact, ${name} successfully added`);
    } else {
      toast.error(`${data.name} is already in contacts.`);
    }
  };

    const handleSubmit = e => {
   e.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    addContact(newContact);
  };

   const reset = () => {
    setName('');
    setNumber('');
  };

    return (
      <form onSubmit={handleSubmit} autoComplete='off'>
        <Title>
        Phonebook
        <Sector>
          <Label>
          Name
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Ivan Ivanov"
          />
        </Label>

        <Label>
          Number
          <Input
            type="tel"
            id="number"
            name="number"
            value={number}
            onChange={handleChange}
            placeholder="123-45-78"          
          />
        </Label>
        <Button type="submit" >Add contact</Button>
        <Toaster />
        {isLoading && <Loader />}
        </Sector>
        </Title>
      </form>
    );

};

export default ContactForm;