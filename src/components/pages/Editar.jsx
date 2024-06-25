import React from 'react';
import { useParams } from 'react-router-dom';
import EnderecoForm from '../form/Form';
import {Typography } from '@mui/material';

const EditarEndereco = () => {
  const { id } = useParams();
  const [endereco, setEndereco] = React.useState(null);

  React.useEffect(() => {
    const buscarEndereco = async () => {
      // Simulação de endereços
      const exemploEndereco = id === '1' ? {
        planeta: 'Marte',
        destinatario: 'Elon Musk',
        codigo_localizacao: '12B4',
        descricao: 'Fabrica da Tesla',
      } : {
        planeta: 'Terra',
        destinatario: 'Jeff Bezos',
        cidade: 'Seattle',
        pais: 'EUA',
        rua: 'Rua Amazon',
        numero: '123',
        descricao: 'Escritório principal da Amazon',
      };
      setEndereco(exemploEndereco);
    };

    buscarEndereco();
  }, [id]);

  const editarEndereco = (endereco) => {
    console.log('Endereço Atualizado:', endereco);
  };

  return (
    <div>
        <h1>Editar Endereço</h1>
        {endereco ? (
          <EnderecoForm enderecoSalvo={endereco} onSubmit={editarEndereco} />
        ) : (
          <Typography>Loading...</Typography>
        )}
    </div>
  );
};

export default EditarEndereco;
