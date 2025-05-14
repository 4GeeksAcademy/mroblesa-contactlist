import  useEffect  from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} = useGlobalReducer();
  
	  useEffect(() => {
  
		  const fetchContact = async () => {
			  try {
				  const contacts = await fetch(`https://playground.4geeks.com/contact/agendas/alejajaja`);
				  const contactResponse = await contacts.json();
  
				  dispatch({ 
					  type: 'set_contacts', 
					  payload: contactResponse.contacts });
			  } catch (error) {
				  console.error('Error fetching contact:', error);
			  }
		  };
		  fetchContact();
		  // CREATE CONTACT
		  const createNewContact = async (newContactData) => {
			  try {
				  const newContact = await fetch('https://playground.4geeks.com/contact/agendas/alejajaja/contacts', {
        			method: 'POST',
       				 headers: {
          			'Content-Type': 'application/json',
       				 },
        			body: JSON.stringify(newContactData),
      			});
				  const data = await newContact.json();
				  dispatch({ 
					  type: 'add_contact',
					  payload: data.contacts });
			  } catch (error) {
				  console.error('Error fetching contacts:', error);
			  }
		  };
		  createNewContact();
		  //DELETE CONTACT
		  const deleteContact = async () => {
			  try {
				  const deleteContact = await fetch(`https://playground.4geeks.com/contact/agendas/alejajaja/contacts/${id}`, {
        			method: 'DELETE',
     	 			})
				  const data = await deleteContact.json();
				  dispatch({ 
					  type: 'delete_contact',
					  payload: data.contacts });
			  } catch (error) {
				  console.error('Error fetching contacts:', error);
			  }
		  };
		  deleteContact();
		  //UPDATE CONTACT
		  const updateContact = async () => {
			  try {
				  const updateContact = await fetch(`https://playground.4geeks.com/contact/agendas/alejajaja/contacts/${id}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(updatedData),
				})
				  const data = await updateContact.json();
				  dispatch({ 
					  type: 'update_contact',
					  payload: data.contacts });
			  } catch (error) {
				  console.error('Error fetching contacts:', error);
			  }
		  };
		  updateContact();
	  },[]);
	  
	  return (
		  <div className="contact-detail container">
		  <h2>Aelajajaja's Contacts </h2>
		  {
			  store.contacts.map ((contact) => (
				  <div>
				  <h3>{contact.name}</h3>
				  <p>Email: {contact.email}</p>
				  <p>Phone: {contact.phone}</p>
				  <p>Address: {contact.address}</p>
				  </div>
		  
			  ))
		  }
		  </div>
	  );
  
}; 