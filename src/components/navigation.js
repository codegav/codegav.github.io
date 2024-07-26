
function Navigation() {
	return(
	<nav className="bg-blue-900 h-24 w-screen flex fixed">
		<div className=" text-blue-200 flex space-x-4 w-fit h-fit mb-3 mt-auto ml-2">
			<div className="text-6xl">
				Gavin Fujimoto
			</div>
			<div className="h-fit mb-0 mt-auto text-xl"> 
				gavfuji@gmail.com
			</div>
			<div className="h-fit mb-0 mt-auto text-xl">
				(949) 899-4824
			</div>
		</div>
		<ul className="text-blue-900 flex space-x-4 mr-2 ml-auto h-fit mb-3 mt-auto text-2xl">
			<li className="w-24"><a href="./#home-section"><div className="rounded-full bg-white hover:font-bold hover:bg-blue-200">Home</div></a></li>
			<li className="w-24"><a href="./#about-section"><div className="rounded-full bg-white hover:font-bold hover:bg-blue-200">About</div></a></li>
			<li className="w-32"><a href="./#projects-section"><div className="rounded-full bg-white hover:font-bold hover:bg-blue-200">Projects</div></a></li>
			<li className="w-32"><a href="./#resume-section"><div className="rounded-full bg-white hover:font-bold hover:bg-blue-200">Resume</div></a></li>
		</ul>
    </nav>
	);
}

export default Navigation;