import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import CadastrarEndereco from './components/pages/Cadastro';
import EditarEndereco from './components/pages/Editar';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastrar" element={<CadastrarEndereco />} />
          <Route path="/editar/:id" element={<EditarEndereco />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
