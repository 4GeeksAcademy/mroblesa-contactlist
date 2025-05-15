import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Aleja Contact List</span>
				</Link>
				<div className="ml-auto m-2">
					<Link to="/create-contact">
						<button className="btn btn-success">Add new contact</button>
					</Link>
					<Link to="/home">
						<button className="btn btn-warning m-2">Back to list</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};