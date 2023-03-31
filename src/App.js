import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <ExternelUsers></ExternelUsers>
    </div>
  );
}
const styleA = {
  border: '2px solid gray',
  margin: '20px',
  
}
function ExternelUsers () {
  // step 1
  const [users, setUsers] = useState([]);
  // useEffect(()=>{}, [])
  // Step 2
  useEffect(()=>{
    // step 3
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    // step 4 connect with state
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h2>External users</h2>
      <p>{users.length}</p>
      {
        // step 5 -- show data using map
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User(props){
  return (
    <div style={styleA}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}
export default App;
