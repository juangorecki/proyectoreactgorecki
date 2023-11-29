import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import HomePage from './pages/Homepage';
import Especialidades from './pages/especialidades';
import Trabajos from './pages/trabajos';
import Contactanos from './pages/contactanos';
import Ubicacion from './pages/ubicacion';


function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/especialidades' element={<Especialidades></Especialidades>}></Route>
        <Route path='/trabajos' element={<Trabajos></Trabajos>}></Route>
        <Route path='/contactanos' element={<Contactanos></Contactanos>}></Route>
        <Route path='/ubicacion' element={<Ubicacion></Ubicacion>}></Route>
      </Routes>
      </BrowserRouter>

      <Footer></Footer>

    </div>
  );
}

export default App;
