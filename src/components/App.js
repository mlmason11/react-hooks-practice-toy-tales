import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {

  // STATE //

  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])


  // GET ALL TOYS //

  useEffect(() => {
    fetch(`http://localhost:3001/toys`)
    .then( r => r.json() )
    .then( toys => setToys(toys) )
  }, [])


  // EVENT HANDLERS

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy( newToy ) {
    setToys([...toys, newToy])
  }


  // RENDER //

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} setToys={setToys} />
    </>
  );
}

export default App;
