import React from 'react';
import {characterReference} from 'util.js';

function PlayerEntry({index, gameNumber, setFormData, formData, setEditPlayersData, editPlayersData, editPlayer, playersData, setPlayersData}){

  //Set the player field
  const setPlayersField = (e, isEditPlayer, index) => {

    //Check if player is being edited
    if (isEditPlayer){

      let tempPlayers = [...editPlayersData];
      tempPlayers[index].[e.target.name] = e.target.value;
      setEditPlayersData(tempPlayers);
      console.log(tempPlayers);
    } else {

      let tempPlayers = [...playersData];
      tempPlayers[index].[e.target.name] = e.target.value;
      setPlayersData(tempPlayers);
    }
  };

  return(
      <div className="player">
        <h1>Player {index + 1}</h1>
        <div className="form-field">
          <label>Name</label>
          <input type="text" name="name"
                 value={editPlayer ? editPlayersData[index].name : playersData[index].name}
                 onChange={(e) => setPlayersField(e, editPlayer, index)}/>
        </div>

        <div className="form-field">
          <label>Character</label>
          <select className="character-select"
                  name="character"
                  onChange={(e) => setPlayersField(e, editPlayer, index)}
                  value={editPlayer ? editPlayersData[index].character : playersData[index].character}>

            <option defaultValue={editPlayer ? false : true}>Select...</option>
            {characterReference[gameNumber].map((character, index) => {
              return <option key={index} value={character}>{character}</option>
            })}

          </select>
        </div>
        <div className="form-field">
          <label>Stars</label>
          <input type="number" name="stars"
                 value={editPlayer ? editPlayersData[index].stars : playersData[index].stars}
                 onChange={(e) => setPlayersField(e, editPlayer, index)}/>
        </div>
        <div className="form-field">
          <label>Coins</label>
          <input type="number" name="coins"
                 value={editPlayer ? editPlayersData[index].coins : playersData[index].coins}
                 onChange={(e) => setPlayersField(e, editPlayer, index)}/>
        </div>
        <div className="form-field">
          <label>Placed</label>
          <select className="placed-select"
                  name="placed"
                  onChange={(e) => setPlayersField(e, editPlayer, index)}
                  value={editPlayer ? editPlayersData[index].placed : playersData[index].placed}>
            <option defaultValue={editPlayer ? false : true}>Select...</option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
          </select>
        </div>
      </div>
    );
}

export default PlayerEntry;
