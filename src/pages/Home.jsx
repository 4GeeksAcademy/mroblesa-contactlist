import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import storeReducer from "../store.js";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer();
	contacts: []

	useEffect(() => {

		const fetchContact = async () => {
			try {
				const contacts = await fetch(`https://playground.4geeks.com/contact/agendas/alejajaja`);
				const contactResponse = await contacts.json();
				console.log('API Response:', contactResponse);
				dispatch({
					type: 'set_contacts',
					payload: contactResponse.contact
				});
			} catch (error) {
				console.error('Error fetching contact:', error);
			}
		};
		fetchContact();
	}, []);

	// CREATE CONTACT
	const createNewContact = async (newContactData) => {
		try {
			const newContact = await fetch('https://playground.4geeks.com/contact/agendas/alejajaja/contacts', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(
					{
						name: newContactData.name ,
						email: newContactData.email,
						phone: newContactData.phone,
						address: newContactData.address
					})
			});
			const data = await newContact.json();
			dispatch({
				type: 'add_contact',
				payload: data.contact
			});
		} catch (error) {
			console.error('Error fetching contacts:', error);
		}
	};
	createNewContact();
	//DELETE CONTACT
	const deleteContact = async (id) => {
		try {
			const deleteContact = await fetch(`https://playground.4geeks.com/contact/agendas/alejajaja/contacts/${id}`, {
				method: 'DELETE',
			})
			const data = await deleteContact.json();
			dispatch({
				type: 'delete_contact',
				payload: id
			});
		} catch (error) {
			console.error('Error fetching contacts:', error);
		}
	};
	//UPDATE CONTACT
	const updateContact = async (id, updatedData) => {
		const newData = prompt('Ingrese nuevos datos en formato JSON\nEjemplo: {"name":"Nuevo nombre","email":"nuevo@email.com"}',
			JSON.stringify(currentData, null, 2));

		if (newData) {
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
					payload: data.contact
				});
			} catch (error) {
				console.error('Error fetching contacts:', error);
			}
		};
	}


	return (
		<div className="contact-detail container">
			<h2>Aelajajaja's Contacts ({store.contacts?.length})</h2>
			{
				<div className="row row-cols-1 row-cols-md-3 g-4">
					{
						store.contacts?.map(contact => (
							<div key={contact.id} className="col">
								<div className="card h-100">
									<div className="card-body">
										<h5 className="card-title">{contact.name}</h5>
										<ul className="list-unstyled">
											<li>📧 {contact.email}</li>
											<li>📱 {contact.phone}</li>
											<li>🏠 {contact.address}</li>
										</ul>
									</div>
									<div className="card-footer">
										<button
											onClick={() => handleUpdate(contact.id, contact)}
											className="btn btn-sm btn-warning me-2">
											Edit
										</button>
										<button
											onClick={() => handleDelete(contact.id)}
											className="btn btn-sm btn-danger">
											Delete
										</button>
									</div>
								</div>
							</div>
						))}
				</div>
			}
		</div>
	);

};

export default Home;