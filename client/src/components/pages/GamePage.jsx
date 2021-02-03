import React from "react";
import NavBar from "components/NavBar"
import Banner from "components/Banner"
import NewGame from "components/newgame/NewGame"
import Game from "components/game/Game"
import NoGames from "components/game/NoGames"


function GamePage({bannerSrc, gameNumber, gameData, getGameData, formData, setFormData, playersData, setPlayersData}) {

  return ( <div>
      <NavBar / >
      <Banner bannerSrc = {bannerSrc}/>
      <NewGame gameNumber = {gameNumber} gameData = {gameData}
               getGameData={getGameData} formData={formData}
               setFormData={setFormData} playersData={playersData}
               setPlayersData={setPlayersData}/>

      {/*Filters and displays games based on the game number associated with it*/}         
      {gameData.filter((game) => {return game.gameNumber === parseInt(gameNumber)}).length > 0
        ? gameData
              .filter((game) => {return game.gameNumber === parseInt(gameNumber)})
              .map((game) => {return <Game gameNumber={gameNumber} game={game} key={game._id} getGameData={getGameData}/>})
        : <NoGames />
      }
      </div>
    );
}

export default GamePage;
