import './App.css';
import Bio from './Bio'
import GuitarContainer from './GuitarContainer';
import Navbar from './/components/Navbar'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Bio/>
      <GuitarContainer/>
    </div>
  );
}

export default App;
