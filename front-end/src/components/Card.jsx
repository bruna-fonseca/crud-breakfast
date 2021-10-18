import React, { useState } from 'react';
import axios from 'axios';
import '../style/card.css';
import Modal from './Modal';
import { Button } from '../style/StyledComponents';

export default function Card(props) {
  const [isOpen, setIsOpen] = useState(false);

  const deleteUser = () => {
    axios.delete(`http://localhost:3001/cadastros/${props.cpf}`)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <section className="card-item" >
          <h1>{props.comida}</h1>

          <div className="card-infos">
            <p>{props.nome}</p>
            <p>{props.cpf}</p>
            <Button onClick={ () => setIsOpen(true) } className="card-btn" type="button">Editar</Button>
            <Button onClick={ () => deleteUser() } className="card-btn" type="button">Deletar</Button>

            {isOpen ? <Modal cadastro={ props.cpf } onClose={() => setIsOpen(false)} /> : null}
          </div>
      </section>
    </div>
  )
};
