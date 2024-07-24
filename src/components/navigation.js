import About from './about';

function Navigation() {
	return(
	<nav>
		<div className = "leftNav">
			<div className = "text-green-500">
				Gavin Fujimoto
			</div>
			<div className = "email">
				gavfuji@gmail.com
			</div>
			<div className = "phone">
				(949) 899-4824
			</div>
		</div>
		<div className = "topdiv">
			<a className="topmenu" href="about-section">About Me</a>
		</div>
    </nav>
	);
}

export default Navigation;