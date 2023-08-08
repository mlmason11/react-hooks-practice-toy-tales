import React, { useState } from "react";

function ToyForm({addToy}) {

  // STATE //

  const [name, setName] = useState("")
  const [image, setImage] = useState("")

  
  // EVENT HANDLERS //

  function handleSubmitToy(e) {
    e.preventDefault()

    const OPTIONS = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        image: image,
        likes: 0
      })
    }

    fetch(`http://localhost:3001/toys`, OPTIONS)
    .then( r => r.json() )
    .then( newToy => addToy(newToy) )

    setName("")
    setImage("")
  }
  

  // RENDER //

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={ handleSubmitToy }>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={ e => setName(e.target.value) }
        />
        <br />
        <input
          type="text"
          name="image"
          value={image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={ e => setImage(e.target.value) }
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
