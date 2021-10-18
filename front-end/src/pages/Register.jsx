import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from '../style/StyledComponents';
import '../style/register.css';

export default function Login() {
  const [values, setValues] = useState({
    nome: '',
    cpf: '',
    comida: '',
  });

  const handleChange = ({ target }) => {
    setValues((prevValue) => ({
      ...prevValue,
      [target.name]: target.value,
    }));
  };

  const httpRequestPost = () => {
    axios.post('http://localhost:3001/cadastros',  values)
      .then(response => console.log(response.data));
  };

  const handleClick = () => {
    httpRequestPost();
    setValues({
      nome: '',
      cpf: '',
      comida: '',
    });
  };

  return (
    <div>
      <h1 className="title">Organizando o Cafezin</h1>
      <Link className="link-lista" to="/list"><p>Ir para a Lista do café</p></Link>
      <section>
        <div className="container">
          <h1>Tela de Cadastro</h1>

          <form>
            <label htmlFor="nome">Nome</label>
            <input onChange={ handleChange } type="text" placeholder="fulano de tal" name="nome" id="nome" value={values.nome} />

            <label htmlFor="cpf">CPF</label>
            <input onChange={ handleChange } type="text" maxLength="11" placeholder="000.000.000-00" name="cpf" id="cpf" value={values.cpf} />

            <label htmlFor="comida">O que você levará para o café da manhã?</label>
            <input onChange={ handleChange } type="text" placeholder="pao quentinho" name="comida" id="break-fast" value={values.comida} />

            <Button onClick={ () => handleClick() } type="button">Enviar</Button>
          </form>

        </div>
      </section>
    </div>
  )
};
