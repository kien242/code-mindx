import './App.css';
import * as hero from "./features/header/hero/hero.js";
import * as nav from './features/header/nav/Nav.js';
import * as footer from "./features/footer/Footer.js"
import "./features/ListProduct/ListProduct.js"
import ListProduct from './features/ListProduct/ListProduct.js';
function App() {
  return (
    <div className="App">
      <nav.Nav/>
      <hero.Hero/>
      <ListProduct/>
      <footer.Footer/>
    </div>
  );
}

export default App;
