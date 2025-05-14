import Home from "./pages/Home";

export const initialStore=()=>{
  return{
    ContactDetail:[],
    contacts: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'set_contacts':

      const { ContactDetail } = action.payload

      return {
        ...store,
       ContactDetail: {
          ...store.ContactDetail,
          ...ContactDetail
        } 
      };

    case 'add_contact':
      const contact = action.payload

      return {
        ...store,
        contacts: [...store.contacts, contact]
      };

    case 'delete_contact':
      const id = action.payload

      return {
        ...store,
        contacts: store.contacts.filter(contact => contact.id !== id)
      };
    case 'update_contact':
      const { id: contactId, ...updatedContact } = action.payload

      return {
        ...store,
        contacts: store.contacts.map(contact => 
          contact.id === contactId ? { ...contact, ...updatedContact } : contact
        )
      };

    default:
      throw Error('Unknown action.');
  }    
}
