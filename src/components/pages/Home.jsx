import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.css'


function Home() {
    return (
        <div className='home'>
            <h1>Bem-vindo ao TME</h1>
            <p>O sistema de entregas expressas entre a Terra e Marte.
                Escolha uma opção abaixo para visualizar:
            </p>
            <div className="home-buttons">
                <Link to="/cadastrar">
                  <Button variant="contained" color="primary">
                    Cadastrar Endereço
                  </Button>
                </Link>
                <Link to="/editar/1">
                  <Button variant="contained" color="success">
                    Editar Endereço 1
                  </Button>
                </Link>
                <Link to="/editar/2">
                  <Button variant="contained" color="success">
                    Editar Endereço 2
                  </Button>
                </Link>
            </div>
        </div>
      
    );
}
  

export default Home;