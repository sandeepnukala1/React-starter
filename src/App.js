import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import Board from './components/Board';
import "./styles.css";

function App() {
  return (
    <div>
      <Header/>
      <Player whichPlayer='x' score={10}/>
      <Player whichPlayer='y' score={20}/>
      <Board />
    </div>
  );
}

export default App;
