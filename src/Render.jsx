import React, { useState, useEffect } from "react";
import { FetchAllPlayers, FetchSinglePlayer } from "./Api";
import { DogSearch } from "./SearchBar";
import { SingleDog } from "./SingleDog";

export const DogCards = () => {
  const [playerList, setPlayerList] = useState([]);
  const [selectedDog, setSelectedDog] = useState([]);
  console.dir(playerList);

  useEffect(() => {
    FetchAllPlayers(setPlayerList);
  }, []);

  const List = playerList.map((pup) => {
    return (
      <div className="single-player-card" key={pup.id}>
        <div className="header-info">
          <p className="pup-title">{pup.name}</p>
          <p className="pup-number">#{pup.id}</p>
        </div>
        <img src={pup.imageUrl} />
        <button
          onClick={() => setSelectedDog(pup)}
          className="detail-button"
          data-id={pup.id}
        >
          See details
        </button>
        <button className="delete-button" data-id={pup.id}>
          Remove from roster
        </button>
      </div>
    );
  });

  return (
    <div>
      <DogSearch />
      <div>
        {selectedDog.id ? (
          <SingleDog selectedDog={selectedDog} />
        ) : (
          <div id="dogList">{List} </div>
        )}
      </div>
    </div>
  );
};
