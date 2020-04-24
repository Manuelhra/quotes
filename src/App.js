import React, { useState, useEffect } from 'react';

import Form from './components/Form'
import Quote from './components/Quote'


const App = () => {

  // Arreglo de citas

  const [ listQuotes, setListQuotes] = useState( () => {
    const storage = JSON.parse(localStorage.getItem('quotes'));

    if (storage) return storage;

    return [];
  });

  const sendQuotes = (quote) => {
    setListQuotes([
      ...listQuotes,
      quote,
    ]);
  };

  useEffect(() => {
    localStorage.setItem('quotes', JSON.stringify(listQuotes));
  }, [listQuotes]);

  // Fnción para eliminar citas

  const quoteDelete = (id) => {

    const newListQuotes = listQuotes.filter((quote) => quote.id !== id );

    setListQuotes(newListQuotes);
  };


  const Title = listQuotes.length === 0 ? 'No hay citas' : 'Administra tus citas'


  return ( 
    <>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form sendQuotes={sendQuotes} />
          </div>
          <div className="one-half column">
            <h2>{Title}</h2>
             {listQuotes.map((quote) => (
               <Quote 
                key={quote.id}
                quote={quote}
                quoteDelete={quoteDelete}
               />
             ))}
          </div>
        </div>
      </div>
    </>

   );
}
 
export default App;