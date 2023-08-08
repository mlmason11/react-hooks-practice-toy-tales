import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, setToys}) {

  // EVENT HANDLERS //

  function likeToy( likedToy ) {
    const newToys = toys.map(toy => toy.id === likedToy.id ? likedToy : toy)
    setToys(newToys)
  }

  function donateToy( donatedToy ) {
    const filteredToys = toys.filter(toy => toy.id !== donatedToy.id)
    setToys(filteredToys)
  }

  
  // RENDER //

  return (
    <div id="toy-collection">
      {toys.map(toy => <ToyCard key={toy.id} toy={toy} likeToy={likeToy} donateToy={donateToy}/>)}
    </div>
  );
}

export default ToyContainer;
