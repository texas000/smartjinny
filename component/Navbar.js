import { useState } from "react";
import styles from "./Homepage/Home.module.css";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-transparent">
			<div className="container-fluid">
				<a className={`navbar-brand ${styles.navTitle}`} href="/">
					SMARTJINNY
				</a>
				<button
					className="navbar-toggler"
					onClick={() => setToggle(!toggle)}
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className={`${toggle ? "expand" : "collapse"} navbar-collapse ${
						styles.handwrite
					}`}
					id="navbarNav"
				>
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="/">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/blog">
								Blog
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Pricing
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
