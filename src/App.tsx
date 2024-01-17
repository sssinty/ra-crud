import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import NotesInput from './components/Input';
// import Cards from './components/card';
import './App.css'


// const fetchApi = (url : string) => {
//   fetch(url, {
//     method: 'GET'
//   })
//   .then((response : Response) => {response.json()})

//   // .then((data) => {console.log(data)})
// }

function App() {
  const [state, setState] = useState('');

  const handlerChange = (event : ChangeEvent<HTMLInputElement>) : void => {
    setState(event.target.value)
  }

  const btnSend = (event : MouseEvent) => {
    fetch('http://localhost:7070/note', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({text: state})
    })
    .then(data => {
      console.log(data)
    })
    .catch(error => {
     console.log(error)
    })  
  }

  // fetchApi('http://localhost:7070/notes')

  return(
    <>
      <NotesInput onChange={handlerChange} type='text' onClick={btnSend}/>
    </>
  )
}

export default App
