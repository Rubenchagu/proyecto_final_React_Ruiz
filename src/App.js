import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";

function App() {
  return (
   <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/:specieId" element={<ItemListContainer/>} />
        <Route path="/character/:id" element={<ItemDetailContainer/>} />
        <Route path="/Cart" element={<Cart/>} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
