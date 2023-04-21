import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './index.css'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<img src="https://www.udacity.com/images/svgs/udacity-tt-logo.svg"/>
			{/* <h3 className="logo">LOGO</h3> */}
			<nav ref={navRef}>
				<a href="/#">Why Udacity?</a>
				<a href="/#">Student Success</a>
				
				<a href="/#">Schools</a>
                <a href="/#">Sign in</a>
				<button className="outline-btn">Get Started</button>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;