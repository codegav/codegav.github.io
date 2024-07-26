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
      <div className="font-serif bg-blue-200">
    <Navigation />
	  <Home/>
	  <About />
	  <Projects />
	  <Resume />
    </div>
    </div>
  );
}

export default App;
