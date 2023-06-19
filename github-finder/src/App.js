import logo from './logo.svg';
import './App.css';
import * as ShowUser from './feature/ShowUser/index.js'

function App() {
  return (
    <div className="App">
      <ShowUser.showUser/>
    </div>
  );
}

export default App;
