
export const ContactEdit = () => {
  return (
   <form className="container mb-3" >
  <label for="name" className="form-label mb-3">Full name</label>
  <input type="name" className="form-control mb-3" id="name" placeholder="Type full name"></input>
  <label for="exampleInputEmail1" className="form-label mb-3">Email address</label>
  <input name="email" className="form-control mb-3" placeholder="Type contact's email" />
  <label type="number" for="phone" className="form-label mb-3">Phone</label>
  <input name="phone" className="form-control mb-3" placeholder="Type contact's phone number" />
  <label for="address" className="form-label mb-3">Address</label>
  <input name="address" className="form-control mb-3" placeholder="Type contact's address" />
  <button className="btn btn-success mb-3" type="submit"
  onClick={async (e) => {createNewContact(e)}}>
  Update</button>
</form>
  );
}

export default ContactEdit;