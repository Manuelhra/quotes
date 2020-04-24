import React from 'react'

const Quote = ({ quote: { pet, owner, hour, sintomas, date, id }, quoteDelete }) => (
  <div className="cita">

    <p>Mascota: <span>{pet}</span></p>
    <p>Propietario: <span>{owner}</span></p>
    <p>Fecha: <span>{date}</span></p>
    <p>Hour: <span>{hour}</span></p>
    <p>Síntomas: <span>{sintomas}</span></p>

    <button 
      className="button eliminar u-full-width"
      onClick={() => quoteDelete(id)}
    >Eliminar &times;</button>
  </div>
)
export default Quote;