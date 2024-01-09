import { useEffect, useState } from 'react'
import { Componente } from './Componente';
import * as API from './services/data'


export function App() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    API.getBooks().then(setBooks);
  })

  return (
    <>

      <h1>Hola Mundo</h1>
      <h2>Como estamos</h2>
      <Componente />

    </>
  )
}
