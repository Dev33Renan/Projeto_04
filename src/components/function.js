import React, { useState, useEffect } from 'react';

export default function formulario() {
  const [formulario, setFormulario] = useState();
  

  const [nomeFormulario, setNomeFormulario] = userState("");
   return (
    <div>
        <form>
            <label>
                Nome:
                <input placeholder="Digite o seu nome" type="text" name="nome"/>
                <input placeholder="digite seu sobrenome" type="text" name="sobrenome"/>
            </label>
            <input type="submit" value="Enviar" />
        </form>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Adiciona</button>
      <ul>
        {lista.map((lista, index) => (
          <li key={index}>
            <p>{lista.nome} {lista.sobrenome}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}