import './App.css';
import Person from "./Person/Person";
import {useState} from "react";

function App() {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Dmitriy', age: 30},
      {name: 'Dmitriy1', age: 31},
    ],
    otherState: 'some other value'
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Dmitriy__changed', age: 300},
        {name: 'Dmitriy1__changed', age: 310}
      ]
    })

  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>Test</p>
      <button onClick={switchNameHandler}>Switch Info</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
    </div>
  );
}

export default App;
