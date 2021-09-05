import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
//import QuantityPicker from "./components/quantityPicker";
import Catalog from "./components/catalog";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <div className="container-fluid">
        <Catalog></Catalog>
        {/* <QuantityPicker></QuantityPicker> */}
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
