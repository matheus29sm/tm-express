import EnderecoForm from '../form/Form';

const CadastrarEndereco = () => {
  const adicionarEndereco = (endereco) => {
    console.log('Novo Endereço:', endereco);
  };

  return (
    <div>
      <h1>Adicionar Novo Endereço</h1>
      <EnderecoForm onSubmit={adicionarEndereco} />
    </div>
  );
};

export default CadastrarEndereco;
