import React from "react";

function ToyCard({toy, likeToy, donateToy}) {

  // EVENT HANDLERS //

  function handleLikeButton() {
    const OPTIONS = {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likes: ++toy.likes })
    }

    fetch(`http://localhost:3001/toys/${toy.id}`, OPTIONS)
    .then( r => r.json() )
    .then( toy => likeToy(toy) )
  }

  function handleDeleteButton() {
    const OPTIONS = { method: 'DELETE' }

    fetch(`http://localhost:3001/toys/${toy.id}`, OPTIONS)
    .then( r => r.json() )
    .then( () => donateToy(toy) )
  }
  

  // RENDER //
  
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes</p>
      <button className="like-btn" onClick={ handleLikeButton }>Like {"<3"}</button>
      <button className="del-btn" onClick={ handleDeleteButton }>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
