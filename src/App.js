import Form from "./components/form/Form";
import Tables from "./components/table/Table";
import useInput from "./customHooks/useInput";
import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";

function App() {
  const [inputs, handleChange] = useInput({name:"", pnumber:"", gender:""})
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, "users")

  const createUser = async() => {
    await addDoc(usersCollectionRef, {name: inputs.name, pnumber:inputs.pnumber, gender: inputs.gender })
  }


  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    };
    getUsers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users])

  return (
    <div className="App">
      <Form inputs = {inputs} handleChange = {handleChange} createUser = {createUser} />
      <Tables users = {users}/>
    </div>
  );
}

export default App;
