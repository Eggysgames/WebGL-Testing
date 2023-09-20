import React, { useState } from 'react';

const Resolution = () => {
  // State to hold the current resolution and game URL
  const [resolution, setResolution] = useState({ width: 1280, height: 720 });
  const [gameUrl, setGameUrl] = useState('https://www.crazygames.com/embed/eggbot-vs-zombies');

  // Function to change the resolution
  const changeResolution = (width:number, height:number) => {
    setResolution({ width, height });
  };

  // Function to handle the input change for the game URL
  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => { // Specify the type
    setGameUrl(e.target.value);
  };

  // Function to load the game using the specified URL
  const loadGame = () => {
    // You may want to add validation here to ensure the URL is valid.
    // For simplicity, I'm assuming the URL is always valid in this example.
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="controls">
        <button onClick={() => changeResolution(1920, 1080)}>1920x1080</button>
        <button onClick={() => changeResolution(1280, 720)}>1280x720</button>
        <button onClick={() => changeResolution(1000, 600)}>1000x600</button>
        <button onClick={() => changeResolution(800, 600)}>800x600</button>
        {/* Add more resolution options as needed */}
      </div>

      <div className="center-content">
        <input
          type="text"
          placeholder="Enter Game URL"
          value={gameUrl}
          onChange={handleUrlChange}
        />
        <button onClick={loadGame}>Load Game</button>
      </div>

      <iframe
        src={gameUrl}
        width={resolution.width}
        height={resolution.height}
        title="Game Preview"
      />
    </div>
  );
};

export default Resolution;
