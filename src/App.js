import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Context/CartContext";
import ClientForm from "./components/ClientForm/ClientForm";

function App() {
  return (
   <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path="/proyecto_final_React_Ruiz" element={<ItemListContainer/>} />
          <Route path="/:specieId" element={<ItemListContainer/>} />
          <Route path="/character/:id" element={<ItemDetailContainer/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/ClientForm" element={<ClientForm/>}/>
        </Routes>
      </CartProvider>
   </BrowserRouter>
  );
}

export default App;