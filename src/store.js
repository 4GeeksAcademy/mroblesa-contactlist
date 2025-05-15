import Home from "./pages/Home";

export const initialStore=()=>{
  return{
    contacts: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'set_contacts':

     case 'set_contacts':
      return {
        ...store,
        contacts: action.payload 
      };

    case 'add_contact':
      return {
        ...store,
        contacts: [...store.contacts, action.payload]
      };

    case 'delete_contact':
       return {
        ...store,
        contacts: store.contacts.filter(contact => contact.id !== action.payload)
      };

    case 'update_contact':
      return {
        ...store,
        contacts: store.contacts.map(contact => 
          contact.id === action.payload.id 
            ? { ...contact, ...action.payload } 
            : contact
        )
      };

    default:
      return store;
  }    
}

