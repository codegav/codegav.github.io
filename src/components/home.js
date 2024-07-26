import robotImg from "../assets/robot.png"

function Home() {
	return(
	<div className="pt-24 h-fit" id="home-section">
	<div className = "m-8 text-center grid grid-cols-2 h-fit">
	<div className = "p-5 mt-[100px] ml-2 mr-auto text-9xl text-left h-fit w-fit top-40 left-8 bg-white rounded-3xl">
		<div className="bg-blue-200 w-fit">Hello!</div>
		<div>Welcome to my portfolio.</div>
	</div>
	<div className="h-fit">
	<img className="h-[600px] w-fit m-auto" src={robotImg} alt="robot" />
	<a className="inline-block pt-4 hover:text-blue-500 hover:underline" href="https://www.flaticon.com/free-icons/robot" title="robot icons">Robot icons created by Freepik - Flaticon</a>
	</div>
	</div>
	</div>
	);
}

export default Home;