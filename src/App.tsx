import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import NotesInput from './components/Input';
import Cards from './components/Card';
import './App.css';
import axios from 'axios';

function App() {
  const [state, setState] = useState<string>('');
  const [textData, setData] = useState<[]>([]);
  const [deleteID, setDeleteID] = useState<number>();
  const [stateAdd, setStateAdd] = useState<boolean>(true);
  const [stateUpdate, setUpdate] = useState<boolean>(true);

  const fetchApi = (url : string) => {
    axios.get(url)
    .then((ressponse) => {
      setData(ressponse.data);
    })
  }

  const deliteApi = (id : number) => {
    axios.delete(`http://localhost:7070/notes/${id}`)
    .then(response => {
      console.log(`Deleted post with ID ${id}`);
    })
    .catch(error => {
      console.error(error);
    });
  }

  const handlerChange = (event : ChangeEvent<HTMLInputElement>) : void => {
    setState(event.target.value);
  }

  const btnSend = () => {
    axios.post('http://localhost:7070/notes', {
      "content": state
    })
    .catch((error) => {
      console.log(error)
    })
    setStateAdd(!stateAdd)
  }

  const btnDelete = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent> ) => {
    setDeleteID(event);
    deliteApi(event)
  }

  const btnUpdateUser = () => {
    setUpdate(!stateUpdate)
    setData(textData)
  }
  
  useEffect(() => {
    void fetchApi('http://localhost:7070/notes');
  },[]);

  useEffect(() => {
    void fetchApi('http://localhost:7070/notes');
  },[stateAdd])

  useEffect(() => {
    void fetchApi('http://localhost:7070/notes');
  },[deleteID])

    useEffect(() => {
    void fetchApi('http://localhost:7070/notes');
  },[stateUpdate])
  
  return(
    <>
        <div className="conteiner-notes">
            <button className="update" onClick={btnUpdateUser}>update</button>
          {textData.map((text) => {
            return <Cards onClick={btnDelete} text={text.content} key={text.id} id={text.id}/>
          })}
          <NotesInput onChange={handlerChange} type='text' onClick={btnSend}/>
        </div>
    </>
  )
}

export default App;