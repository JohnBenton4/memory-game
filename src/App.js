import './App.css';
import MemoryCard from './components/MemoryCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <h3 class="subtitle">Match Cards To Win</h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <div className="Container">
        <div class="row1">
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div class="row2">
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div class="row3">
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div class="row4">
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
      </div>


    </div>
  );
}

export default App;
