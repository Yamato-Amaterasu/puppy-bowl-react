import React, { useState, useEffect } from "react";
import { ReactDOM } from "react-dom/client";
import { fetchAllPlayers } from "./Api";
import { Router } from "react-router-dom";

export const DogCards = () => {
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    fetchAllPlayers(setPlayerList);
  }, []);

  const allTheDogs = playerList;

  const List = allTheDogs.map((pup) => {
    return (
      <div className="single-player-card" key={pup.id}>
        <div className="header-info">
          <p className="pup-title">{pup.name}</p>
          <p className="pup-number">#{pup.id}</p>
        </div>
        <img src={pup.imageUrl} />
        <button className="detail-button" data-id={pup.id}>
          See details
        </button>
        <button className="delete-button" data-id={pup.id}>
          Remove from roster
        </button>
      </div>
    );
  });

  // console.log(DummyData);

  return <div id="dogList">{List}</div>;
};
