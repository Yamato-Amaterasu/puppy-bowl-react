import React from "react";

export const SingleDog = (props) => {
  const { selectedDog } = props;
  console.log(selectedDog);
  const { breed, id, name, imageUrl } = selectedDog;

  return (
    <div className="single-player-view">
      <div className="header-info">
        <p className="pup-title">{name}</p>
        <p className="pup-number">#{id}</p>
      </div>
      {/* <p>Team: {team ? team.name : "Unassigned"}</p> */}
      <p>Breed: {breed}</p>
      <img src={imageUrl} />
      <button>Go Back!</button>
    </div>
  );
};
