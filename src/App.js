import logo from './logo.svg';
import './App.css';
import './style.css';
import About from './components/about';
import Home from './components/home';
import Projects from './components/projects';
import Resume from './components/resume';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="App">
	{/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload jk i lied thats not how any of this works bwahahaha
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
	</header>*/}
	  <Navigation></Navigation>
	  <Home></Home>
	  <About></About>
	  <Projects></Projects>
	  <Resume></Resume>
	  <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}

export default App;
