import React, { useState } from "react";
import { useEffect } from "react";

const cohortName = "2211-FTB-ET-WEB-FT";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export const FetchAllPlayers = async (setPlayerList) => {
  try {
    const response = await fetch(`${APIURL}/players`);
    const result = await response.json();
    console.log(result.data.players);
    return setPlayerList(result.data.players);
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
};

export const FetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}/players/${playerId}`);
    const result = await response.json();
    console.log(result);
    return result.data.player;
  } catch (error) {
    console.error(error);
  }
};
