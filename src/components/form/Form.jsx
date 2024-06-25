import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Box, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const EnderecoForm = ({ enderecoSalvo, onSubmit }) => {
  const [endereco, setEndereco] = useState(enderecoSalvo || {});
  const [mostrarCampoEndereco, setMostrarCampoEndereco] = useState(enderecoSalvo?.planeta === 'Marte');
  const navigate = useNavigate();

  useEffect(() => {
    setEndereco(enderecoSalvo || {});
    setMostrarCampoEndereco(enderecoSalvo?.planeta === 'Marte');
  }, [enderecoSalvo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEndereco((prevEndereco) => ({
      ...prevEndereco,
      [name]: value,
    }));

    if (name === 'planeta') {
      setMostrarCampoEndereco(value === 'Marte');
    }
  };

  const salvar = (e) => {
    e.preventDefault();
    onSubmit(endereco);
  };

  const cancelar = () => {
    navigate('/');
  };

  return (
    <Box 
      component="form" 
      onSubmit={salvar}
      sx={{ margin: '20px auto', maxWidth: 600 }}
    >
      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">Planeta</FormLabel>
        <RadioGroup
          name="planeta"
          value={endereco.planeta || 'Terra'}
          onChange={handleChange}
          row
        >
          <FormControlLabel value="Terra" control={<Radio />} label="Terra" />
          <FormControlLabel value="Marte" control={<Radio />} label="Marte" />
        </RadioGroup>
      </FormControl>
      <TextField
        label="Destinatário"
        name="destinatario"
        variant="outlined"
        value={endereco.destinatario || ''}
        onChange={handleChange}
        fullWidth
        inputProps={{
          maxLength: 50,
        }}
      />
      {mostrarCampoEndereco ? (
        <TextField
          label="Código"
          name="codigo_localizacao"
          variant="outlined"
          value={endereco.codigo_localizacao || ''}
          onChange={handleChange}
          margin="normal"
          inputProps={{
            maxLength: 4,
          }}
        />
      ) : (
        <>
          <TextField
            label="Cidade"
            name="cidade"
            variant="outlined"
            fullWidth
            margin="normal"
            value={endereco.cidade || ''}
            onChange={handleChange}
          />
          <TextField
            label="País"
            name="pais"
            variant="outlined"
            fullWidth
            margin="normal"
            value={endereco.pais || ''}
            onChange={handleChange}
          />
          <TextField
            label="Rua"
            name="rua"
            variant="outlined"
            fullWidth
            margin="normal"
            value={endereco.rua || ''}
            onChange={handleChange}
          />
          <TextField
            label="Número"
            name="numero"
            variant="outlined"
            type="number"
            fullWidth
            margin="normal"
            value={endereco.numero || ''}
            onChange={handleChange}
          />
        </>
      )}
      <TextField
        label="Descrição de Endereço"
        name="descricao"
        variant="outlined"
        multiline
        rows={4}
        value={endereco.descricao || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
        inputProps={{
          maxLength: 500,
        }}
      />
      <div className='buttons'>
      <Button type="button" variant="contained" color="error" onClick={cancelar}>
          Cancelar
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Salvar Endereço
        </Button>
      </div>
    </Box>
  );
};

EnderecoForm.propTypes = {
  enderecoSalvo: PropTypes.shape({
    planeta: PropTypes.string,
    destinatario: PropTypes.string,
    codigo_localizacao: PropTypes.string,
    cidade: PropTypes.string,
    pais: PropTypes.string,
    rua: PropTypes.string,
    numero: PropTypes.number,
    descricao: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

export default EnderecoForm;
