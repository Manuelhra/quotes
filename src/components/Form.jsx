import React, { useState } from 'react';

import shortId from 'shortid';

const Form = ({ sendQuotes }) => {

  // state quote
  const [ quote, setquote] = useState({
    pet: '',
    owner: '',
    date: '',
    hour: '',
    sintomas: '',
  });

  const [error, setError] = useState(null);

  // Función que se ejecuta cada vez que escribimos en un input

  const handleChange = (event) => {
    setquote({
      ...quote,
      // Encerramos en llaves para poder pasar el name de ese input en el cual se escribe y así 
      // reemplazar cada valor en el state quote.
      [event.target.name]: event.target.value,
    });
  };

  const { pet, owner, date, hour, sintomas, } = quote;

  // Cuando el usuario presiona le boton de agregar cita.

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Siempre debemos validar un formulario

    if ( pet.trim() === '' || owner.trim() === '' || date.trim() === '' || hour.trim() === '' || sintomas.trim() === ''){
      setError(true);
      setTimeout(() => {
        setError(null);
      }, 4000);

      return;
    };

    // Despues asignamos un id

    const id = shortId.generate();

    quote.id = id;
    
    // Enviamos la cita a la lista de citas

    sendQuotes(quote);


    // Despues reiniciar el form

    setquote({
      pet: '',
      owner: '',
      date: '',
      hour: '',
      sintomas: '',
    })

  };

  return ( 
    <>
      <h1>Crear cita</h1>

      { error && <p className="alerta-error">Todos los campos son obligatorios</p> }

      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nombre Mascota</label>
        <input
         type="text"
         name="pet"
         className="u-full-width"
         placeholder="Nombre Mascota"
         onChange={handleChange}
         value={pet}
         
         />

        <label htmlFor="">Nombre dueño</label>
        <input
         type="text"
         name="owner"
         className="u-full-width"
         placeholder="Nombre dueño de la Mascota"
         onChange={handleChange}
         value={owner}
         
         />

        <label htmlFor="">Fecha</label>
        <input
         type="date"
         name="date"
         className="u-full-width"
         onChange={handleChange}
         value={date}
         
         />

        <label htmlFor="">Hora</label>
        <input
         type="time"
         name="hour"
         className="u-full-width"
         onChange={handleChange}
         value={hour}
         
         />

        <label htmlFor="">Síntomas</label>
          <textarea 
            name="sintomas" 
            className="u-full-width"
            onChange={handleChange}
            value={sintomas}
            >
            
          </textarea>

          <button
            type="submit"
            className="u-full-width button-primary"
          >Agregar cita</button>

      </form>
    </>
   );
}
 
export default Form;
