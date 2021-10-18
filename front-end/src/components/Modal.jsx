import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '../style/StyledComponents';

export default function Modal({ onClose, cadastro }) {

  const [info, setInfo] = useState({
    nome: '',
    cpf: '',
    comida: '',
  });

  const updateUser = () => {
    axios.put('http://localhost:3001/cadastros', { info, cadastro })
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  };

  const handleOnChange = ({ target }) => {
    setInfo((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
    console.log(info);
  };

  return (
      <div>
        <Button onClick={ onClose } type="button">X</Button>
        <form>
            <label htmlFor="nome">Nome:</label>
            <input onChange={ handleOnChange } type="text" name="nome" id="nome" />

            <label htmlFor="cpf">CPF</label>
            <input onChange={ handleOnChange } type="text" maxLength="11"  name="cpf" id="cpf" />

            <label htmlFor="comida">O que você levará para o café da manhã?</label>
            <input onChange={ handleOnChange } type="text"  name="comida" id="break-fast" />

            <Button onClick={ updateUser } type="button">Enviar</Button>
          </form>
      </div>
  );
};
