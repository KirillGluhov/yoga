import "../src/styles/style.css";
import "../src/styles/columns.css";
import "../src/styles/price.css";

import Home from './pages/Home';
import Directions from "./pages/Directions";
import Price from "./pages/Prices";

function App() {

  return (<>
    <Home/>
    <Directions/>
    <Price/>
  </>);
}

export default App;