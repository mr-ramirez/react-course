import logo from './logo.svg';
import './App.css';

import List from './components/list';

function App() {
  const items = [
    { id: 1, title: 'Bake some cookies' },
    { id: 2, title: 'Pick up the garbage' },
    { id: 3, title: 'Clean the table' },
    { id: 4, title: 'Finish your homework' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <List items={items} />
      </header>
    </div>
  );
}

export default App;
