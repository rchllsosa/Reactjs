import './App.css';
import {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";

function App() {
  const [entries, setEntries] = useState([]);
  const addEntry = (entry) => {
    setEntries([...entries, entry].sort((a,b) => a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1));
  const deleteEntry = (delEntry)
  } 
  return (
    <div className="App">
        <h1>My Simple Phonebook</h1>
        <EntryForm addEntry={addEntry} />
        <DislayEntries entries={entries}/>
        <DeleteEntry delEntry={delEntry}/>
    </div>
  );
}
function EntryForm({addEntry}) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [contactNo, setContactNo] = useState("")
    const handleSubmit = (e) => {
      e.preventDefault();
      addEntry({firstName, lastName, contactNo})};
  return ( <form onSubmit={handleSubmit}>
  <input type="text" name="firstName" id="firstName" placeholder="Enter First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
  <input type="text" name="LastName" id="LastName" placeholder="Enter Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
  <input type="text" name="contactNo" id="contactNo" placeholder="Enter Contact Number" value={contactNo} onChange={(e) => setContactNo(e.target.value)}/>
  <button type="submit">Submit</button>
  </form> );
}

function DislayEntries({entries}){
  return(
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Contact Number</th>
        </tr>
      </thead>
      <tbody>
        {entries.map(entry => (
          <tr>
            <td>{entry.firstName}</td>
            <td>{entry.lastName}</td>
            <td>{entry.contactNo}</td>
            <button type="button" onClick={() => deleteEntry(entries)} className="remove-btn">Delete</button>
          </tr>
        ))}
      </tbody>
    </table>
  )
};
export default App;
