import NavBar from './components/NavBar/NavBar'
//import JsonFakeStore from './components/Fetch/JsonFakeStore';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='*' element={<h2>Sitio en Construcción</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;